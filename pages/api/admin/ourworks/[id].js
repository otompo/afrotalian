import nc from 'next-connect';
import dbConnect from '../../../../backend/config/dbConnect';
import { removeWork } from '../../../../backend/controllers/ourworksController';
import { isAdmin } from '../../../../backend/middlewares';
import { isAuthenticatedUser } from '../../../../backend/middlewares/auth';
import onError from '../../../../backend/utils/errors';
const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser, isAdmin).delete(removeWork);

export default handler;
