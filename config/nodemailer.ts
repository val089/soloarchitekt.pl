import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  pool: true,
  service: 'Godaddy',
  host: 'smtp.secureserver.net',
  port: 465,
  secure: false,
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: 'kontakt@soloarchitekt.pl',
  to: 'kontakt@soloarchitekt.pl',
};
