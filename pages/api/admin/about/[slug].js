import nc from 'next-connect';
import dbConnect from '../../../../backend/config/dbConnect';
import {
  getSingleAbout,
  updateAbout,
  updateAboutVideo,
} from '../../../../backend/controllers/aboutController';
import { isAdmin } from '../../../../backend/middlewares';
import { isAuthenticatedUser } from '../../../../backend/middlewares/auth';
import onError from '../../../../backend/utils/errors';
const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser, isAdmin).get(getSingleAbout);
handler.use(isAuthenticatedUser, isAdmin).patch(updateAbout);
handler.use(isAuthenticatedUser, isAdmin).put(updateAboutVideo);

export default handler;
