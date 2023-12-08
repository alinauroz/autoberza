import mailer from '@sendgrid/mail';
import { ISendMailArgs } from './resend';

mailer.setApiKey(process.env.SENDGRID_API_KEY as string);

export const send = async ({
  to: toInput,
  from,
  subject,
  text,
}: ISendMailArgs & { to: string | [string] }) => {
  try {
    const to = Array.isArray(toInput) ? toInput : [toInput];
    const msg = {
      to,
      from,
      subject,
      html: text,
    };
    await mailer.send(msg);
    return {};
  } catch (err) {
    return { error: true };
  }
};
