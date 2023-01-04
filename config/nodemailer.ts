import nodemailer from 'nodemailer';

const email = process.env.EMAIL_GOOGLE;
const pass = process.env.EMAIL_PASS_GOOGLE;

export const transporter = nodemailer.createTransport({
  pool: true,
  service: 'gmail',
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: 'soloarchitekt.web@gmail.com',
  to: 'kontakt@soloarchitekt.pl',
};

// export const transporter = nodemailer.createTransport({
//   pool: true,
//   service: 'Godaddy',
//   host: 'smtp.secureserver.net',
//   port: 587,
//   secure: false,
//   auth: {
//     user: email,
//     pass,
//   },
// });

// export const mailOptions = {
//   from: 'kontakt@soloarchitekt.pl',
//   to: 'kontakt@soloarchitekt.pl',
// };
