function sendEmail(req, res, next) {
    console.log("Email sending middleware executing.....");
    next();
}

module.exports = sendEmail;