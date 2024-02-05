const nodemailer = require('nodemailer');

const sendRevenueEmail = async (author, currentMonthRevenue, currentYearRevenue, totalRevenue) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com',
      pass: 'your_email_password',
    },
  });

  const mailOptions = {
    from: 'your_email@gmail.com',
    to: author.email,
    subject: 'Book Store Revenue Update',
    html: `
      <p>Hello ${author.name},</p>
      <p>Here is your revenue update:</p>
      <p>Current Month Revenue: $${currentMonthRevenue}</p>
      <p>Current Year Revenue: $${currentYearRevenue}</p>
      <p>Total Revenue: $${totalRevenue}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = {
  sendRevenueEmail,
};
