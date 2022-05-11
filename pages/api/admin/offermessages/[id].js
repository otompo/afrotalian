import nc from 'next-connect';
import { deleteMessage } from '../../../../backend/controllers/messageController';
import dbConnect from '../../../../backend/config/dbConnect';
import { isAdmin } from '../../../../backend/middlewares';
import onError from '../../../../backend/utils/errors';
import { isAuthenticatedUser } from '../../../../backend/middlewares/auth';
import { getSingleOfferMessage } from '../../../../backend/controllers/offerMessageController';
const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser, isAdmin).get(getSingleOfferMessage);
handler.use(isAuthenticatedUser, isAdmin).delete(deleteMessage);

export default handler;
