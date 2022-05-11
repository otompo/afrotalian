import nc from 'next-connect';
import dbConnect from '../../../../backend/config/dbConnect';
import {
  createOurWorks,
  getAllWorks,
} from '../../../../backend/controllers/ourworksController';
import { isAdmin } from '../../../../backend/middlewares';
import { isAuthenticatedUser } from '../../../../backend/middlewares/auth';
import onError from '../../../../backend/utils/errors';
const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser, isAdmin).post(createOurWorks);
handler.use(isAuthenticatedUser, isAdmin).get(getAllWorks);

export default handler;
