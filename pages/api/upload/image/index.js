import nc from 'next-connect';
import dbConnect from '../../../../backend/config/dbConnect';
import { uploadProfileImage } from '../../../../backend/controllers/userController';
import { isAuthenticatedUser } from '../../../../backend/middlewares/auth';
import onError from '../../../../backend/utils/errors';
const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).post(uploadProfileImage);
export const config = { api: { bodyParser: { sizeLimit: '25mb' } } };
export default handler;
