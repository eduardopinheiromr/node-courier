import nodemailer from "nodemailer";
import hbsOptions from "./template.config";
import "dotenv/config";

const {
  MAIL_VERIFIED_SENDER,
  MAIL_SERVICE,
  MAIL_HOST,
  MAIL_USER,
  MAIL_PASSWORD,
} = process.env;

const transporter = nodemailer.createTransport({
  service: MAIL_SERVICE,
  host: MAIL_HOST,
  sender: MAIL_VERIFIED_SENDER,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD,
  },
});

transporter.use("compile", hbsOptions);

export default transporter;
