const jwt = require("jsonwebtoken");
const User = require("../models/User");

const requireAuth = (req, res, next) => {
  const token = req.header("authorization")
    ? req.header("authorization").replace("Bearer ", "")
    : null;

  if (token) {
    jwt.verify(token, "secrete here", (error, decodedToken) => {
      if (error) {
        console.log(error.message);
        res.redirect("/login"); // send status instead
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect("/login"); // send status instead
  }
};

// check current user
const checkUser = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, "secrete here", async (error, decodedToken) => {
      if (error) {
        console.log(error.message);
        res.locals.user = null;
        next();
      } else {
        console.log(decodedToken);
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports = { requireAuth, checkUser };
