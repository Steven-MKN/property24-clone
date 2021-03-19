const nodemailer = require("nodemailer");
const ejs = require("ejs");

require("dotenv").config();
const USERNAME = process.env.EMAIL;
const PASSWORD = process.env.EMAIL_PASSWORD;

exports.positiveNumOrDefault = (number, _default) => {
  try {
    let num = Number.parseInt(number);

    if (num > 0) return num;
  } catch (error) {}
  return _default;
};

const getHtmlBody = async (data) => {
  console.log("getting html body...");

  try {
    const html = await ejs.renderFile(
      "templates/contactAgent.ejs",
      { data },
      { async: true }
    );

    return html;
  } catch (error) {
    throw error;
  }
};

exports.sendEmail = async (data) => {
  console.log(data);
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.mail.yahoo.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: USERNAME,
        pass: PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    console.log("transport created...");

    const html = await getHtmlBody(data);

    let result = await transporter.sendMail({
      from: '"Property24-clone" <stephanos_sa@yahoo.com>', // sender address
      to: data.agentEmail, // list of receivers
      subject: "Someone is Interested in a Property You Listed", // Subject line
      html: html, // html body
    });

    console.log("Message sent: %s", result.messageId);
  } catch (error) {
    throw error;
  }
};
