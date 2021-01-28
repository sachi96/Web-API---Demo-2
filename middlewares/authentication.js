function authenticate(req, res, next) {
    console.log("Authentication middleware executing.....");
    next();
}

module.exports = authenticate;