const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere'});

const sendEmail = async (options) => {
  const messageData = {
    from: process.env.MAILGUN_SENDER,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  try {
    const msg = await mg.messages.create(process.env.MAILGUN_DOMAIN, messageData);
    console.log('Email sent successfully:', msg);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
