const User = require("../models/User");
const jwt = require("jsonwebtoken");
const maxAge = 3 * 24 * 60 * 60;

// handle errors
const handleErrors = (error) => {
  console.log(error.message, error.code);

  let message = { email: "", password: "" };

  // incorrect email
  if (error.message === "Incorrect email") {
    message.email = "the email you entered is not registered";
  }

  // incorrect password
  if (error.message === "Incorrect password") {
    message.password = "the password you entered is incorrect";
  }

  // duplicate error code
  if (error.code === 11000) {
    message.email = "the email address is already registered";
    return message;
  }

  // validate errors
  if (error.message.includes("user validation failed")) {
    Object.values(error.errors).forEach(({ properties }) => {
      message[properties.path] = properties.message;
    });
  }

  return message;
};

const createToken = (id) => {
  return jwt.sign({ id }, "secrete here", { expiresIn: maxAge });
};

exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).send(errors);
  }
};

exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).send(errors);
  }
};

exports.logout_get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.send(200);
};
