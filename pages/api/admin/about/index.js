import nc from 'next-connect';
import dbConnect from '../../../../backend/config/dbConnect';
import {
  createAbout,
  getAllAbout,
} from '../../../../backend/controllers/aboutController';
import { isAdmin } from '../../../../backend/middlewares';
import { isAuthenticatedUser } from '../../../../backend/middlewares/auth';
import onError from '../../../../backend/utils/errors';
const handler = nc({ onError });

dbConnect();

handler.get(getAllAbout);
handler.use(isAuthenticatedUser, isAdmin).post(createAbout);

export default handler;
