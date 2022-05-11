import nc from 'next-connect';
import dbConnect from '../../../../backend/config/dbConnect';
import { isAdmin } from '../../../../backend/middlewares';
import onError from '../../../../backend/utils/errors';
import { isAuthenticatedUser } from '../../../../backend/middlewares/auth';
import { getAllOfferMessages } from '../../../../backend/controllers/offerMessageController';
const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser, isAdmin).get(getAllOfferMessages);

export default handler;
