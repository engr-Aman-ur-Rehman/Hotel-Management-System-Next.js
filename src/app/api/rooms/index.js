import c from 'next-connect';
import { allRooms } from '@/app/controllers/roomControllers';

const handler = nc();
handler.get(allRooms);

export default handler;
