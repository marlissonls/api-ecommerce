const emailConfig = {
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
    }
};

export default emailConfig;