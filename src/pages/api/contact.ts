const nodemailer = require('nodemailer');
import type { NextApiRequest, NextApiResponse } from 'next'

export default function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    const { fName, lName, email, message } = JSON.parse(req.body);

    if (!fName || !email || !message) {
        res.status(500).send({ message: "Required parameters not passed!!" });
        return;
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const mailOption = {
        from: `${email}`,
        to: `${process.env.EMAIL}`,
        subject: `New mail from ${email}`,
        text: `${fName} ${lName} wrote: ${message} `,
    };


    transporter.sendMail(mailOption, (err: any) => {
        if (err) {
            console.log(err);
            res.status(500).send({ message: JSON.stringify(err) })
        } else {
            console.log("mail send");
            res.status(200).json({ message: 'Success!!' })
        }
    });
}