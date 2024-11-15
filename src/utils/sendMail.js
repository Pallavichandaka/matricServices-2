
const transporter = require('../Config/mail');

const sendMail = async (subMail) => {
  try {
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #4CAF50;">${subMail}</h2>
      </div>
    `;

    await transporter.sendMail({
      from: 'mani@fixmymill.com', 
      to: ["pranesha182004@gmail.com"], 
      subject: "Subscription Confirmation", 
      html: htmlContent,
      text: `New subscriber Request Details:\n\nEmail: ${subMail}`, 
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; 
  }
};

module.exports = sendMail;
