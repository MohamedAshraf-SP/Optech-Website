
import nodemailer from 'nodemailer';

async function sendFeedback(name, userEmail, message) {
    //console.log(process.env.ORGANIZATION_EMAIL,process.env.ORGANIZATION_EMAIL_PASS, userEmail)
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Can use other providers like Yahoo, Outlook, etc.

        auth: {
            user: process.env.ORGANIZATION_EMAIL,    // Your organization's email
            pass: process.env.ORGANIZATION_EMAIL_PASS // Your organization's email password
        }
    });

    // Email options
    const mailOptions = {
        from: `"${name}" <${userEmail}>`,  // From the user's email (display purposes only)
        to: process.env.ORGANIZATION_EMAIL, // Your organization's email
        subject: 'New Feedback from Website',
        text: `You have received new feedback from:
      
      Name: ${name}
      Email: ${userEmail}
      
      Message: 
      ${message}`
    };

    // Send the email
    let info = await transporter.sendMail(mailOptions);
    return info;
}

export const emailSender = async (req, res) => {
    const { name, userEmail, message } = req.body;

    try {
        const info = await sendFeedback(name, userEmail, message);
        res.status(200).json({ success: true, message: 'Feedback sent!', info });
    } catch (error) {
        console.error('Error sending feedback:', error);
        res.status(500).json({ success: false, message: 'Failed to send feedback.', error });
    }
}