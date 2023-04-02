const nodemailer = require("nodemailer");
const Logger = require("../services/logger.services");
const userLogger = new Logger("user", "email.utils");

// async..await is not allowed in global scope, must use a wrapper
exports.sendMail = async (receiver, subject, text, html) => {
  // create reusable transporter object using the default SMTP transport

  try {
    let account = await nodemailer.createTestAccount();

    let transporter = await nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });

    let msg = {
      from: '"Node Mailer" <xjihxre694@tormails.com>',
      to: receiver,
      subject,
      text,
      html,
    };
    let info = await transporter.sendMail(msg);
    userLogger.info(
      `Message sent: ${
        info.messageId
      },Preview URL: ${nodemailer.getTestMessageUrl(info)}`
    );

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    userLogger.error(error.message);
    console.log(error.message);
  }
};
