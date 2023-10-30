import * as nodemailer from "nodemailer";

import { GOOGLE_EMAIL, GOOGLE_EMAIL_PASSWORD } from "$env/static/private";

type MailOption = {
    to: string;
    subject: string;
    text: string;
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: GOOGLE_EMAIL,
        pass: GOOGLE_EMAIL_PASSWORD,
    },
});

transporter.verify((error) => {
    if (error) console.error(error);
});

const sendEmail = async (mailOption: MailOption) => {
    try {
        await transporter.sendMail({
            ...mailOption,
            from: `Bangmod Hackathon 2024 <${GOOGLE_EMAIL}>`
        })
    } catch (error) {
        console.error(error);
    }
}

export { sendEmail };
