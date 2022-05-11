import nc from 'next-connect';
import dbConnect from '../../../../backend/config/dbConnect';
import {
  createPartner,
  getAllPartness,
} from '../../../../backend/controllers/partnessController';
import { isAdmin } from '../../../../backend/middlewares';
import { isAuthenticatedUser } from '../../../../backend/middlewares/auth';
import onError from '../../../../backend/utils/errors';
const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser, isAdmin).post(createPartner);

handler.use(isAuthenticatedUser, isAdmin).get(getAllPartness);

export default handler;
