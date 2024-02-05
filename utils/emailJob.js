const emailQueue = require('./emailQueue');

const sendRevenueUpdateEmail = async (author, currentMonthRevenue, currentYearRevenue, totalRevenue) => {
  await emailQueue.add('sendRevenueEmail', { author, currentMonthRevenue, currentYearRevenue, totalRevenue });
};

module.exports = {
  sendRevenueUpdateEmail,
};
