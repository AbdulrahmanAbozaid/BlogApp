const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
exports.sendMail = async (receiver, subject, text, html) => {
  // create reusable transporter object using the default SMTP transport

  nodemailer.createTestAccount((err, account) => {
    if (err) {
      console.error("Failed to create a testing account. " + err.message);
      return process.exit(1);
    }

    let transporter = nodemailer.createTransport({
      // service: "gmail",
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
    transporter.sendMail(msg, (err, info) => {
      if (err) {
        console.log("Error occurred. " + err.message);
        return process.exit(1);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
};
