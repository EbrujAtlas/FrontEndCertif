import { Channels } from './channels';
import { Users } from './users';

export interface Messages {
  messageId: string;
  messageContent: string;
  messageDate: Date;
  channel: Channels;
  user: Users;
}
