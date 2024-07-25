import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, telephone, subject, message } = req.body;

        // Create a transporter using SMTP
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        try {
            // Send email
            await transporter.sendMail({
                from: '"Your Website" <your-email@example.com>',
                to: "recipient@example.com",
                subject: `New Contact Form Submission: ${subject}`,
                text: `
                    Name: ${name}
                    Email: ${email}
                    Phone: ${telephone}
                    Subject: ${subject}
                    Message: ${message}
                `,
                html: `
                    <h1>New Contact Form Submission</h1>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${telephone}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong> ${message}</p>
                `,
            });

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}