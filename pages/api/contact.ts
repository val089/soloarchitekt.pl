// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { transporter, mailOptions } from '../../config/nodemailer';

type Message = {
  message: string;
};

type Success = {
  success: boolean;
};

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    firstName: string;
    email: string;
    phoneNumber: string;
    message: string;
  };
}

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse<Message | Success>) => {
  if (req.method === 'POST') {
    const data = req.body;
    if (!data.firstName || !data.email || !data.phoneNumber || !data.message) {
      return res.status(400).send({ message: 'Fill in all form fields.' });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: 'Email z soloarchitekt.pl',
        html: `
        <h3>e-mail z soloarchitekt.pl</h3>
        <p><strong>Imię:</strong> ${data.firstName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Tel:</strong> ${data.phoneNumber}</p>
        <p><strong>Wiadomość:</strong> ${data.message}</p>
        `,
      });

      return res.status(200).send({ success: true });
    } catch (error) {
      return res.status(400).send({ message: 'Something went wrong while sending an email. ' });
    }
  }

  return res.status(400).send({ message: 'Bad request' });
};

export default handler;
