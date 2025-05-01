
// EmailJS configuration utility
import emailjs from 'emailjs-com';

// Initialize EmailJS with your user ID
// You'll need to replace this with your actual EmailJS user ID
const initEmailJS = () => {
  emailjs.init("YOUR_EMAILJS_USER_ID");
};

// Send email function
export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const result = await emailjs.send(
      "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
      "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toISOString(),
      }
    );
    
    return {
      success: true,
      result
    };
  } catch (error) {
    console.error("EmailJS error:", error);
    return {
      success: false,
      error
    };
  }
};

export default initEmailJS;
