const { Queue, Worker, QueueScheduler } = require('bull');
const emailService = require('../services/emailService');

const emailQueue = new Queue('email', { limiter: { max: 100, duration: 60000 } });

const emailScheduler = new QueueScheduler('email');

emailQueue.process(async (job) => {
  const { author, currentMonthRevenue, currentYearRevenue, totalRevenue } = job.data;
  await emailService.sendRevenueEmail(author, currentMonthRevenue, currentYearRevenue, totalRevenue);
});

module.exports = emailQueue;
