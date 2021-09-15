const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    const decode = jwt.verify(req.headers.auth, "Srm");
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};
