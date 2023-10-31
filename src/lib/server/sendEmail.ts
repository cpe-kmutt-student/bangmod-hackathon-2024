import { createTransport } from 'nodemailer';

import { GOOGLE_EMAIL, GOOGLE_EMAIL_PASSWORD } from '$env/static/private';

type MailOption = {
	to: string;
	subject: string;
	html: string;
};

const sendEmail = async (mailOption: MailOption) => {
	try {
		const transporter = createTransport({
			service: 'gmail',
			host: 'smtp.gmail.com',
			port: 587,
			secure: false,
			auth: {
				user: GOOGLE_EMAIL,
				pass: GOOGLE_EMAIL_PASSWORD
			}
		});

		transporter.verify((error) => {
			if (error) console.error(error);
		});

		await transporter.sendMail({
			...mailOption,
			from: `Bangmod Hackathon 2024 <${GOOGLE_EMAIL}>`
		});
	} catch (error) {
		console.error(error);
	}
};

export { sendEmail };
