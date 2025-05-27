const nodemailer = require("nodemailer");

// Reusable mailer function
async function sendEmail({ to, subject, html }) {
  // Setup transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "topmentorsline@gmail.com",
      pass: "hhdvegmewqijxbtg",
    },
  });

  // Mail options
  const mailOptions = {
    from: "topmentorsline@gmail.com",
    to: to,
    subject: subject,
    html: html,
  };

  // Send email
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return { success: true, info };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
}

module.exports = sendEmail;
