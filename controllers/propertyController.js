const { propertyConfig } = require("../config/config");
const { positiveNumOrDefault } = require("../utils/utils");

const multer = require("multer");
const Property = require("../models/Property");
const User = require("../models/User");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("file");

exports.property_get = async (req, res) => {
  const id = req.params.id;

  res.send({
    method: "get",
    id,
  });
};

exports.property_post = async (req, res) => {
  try {
    const data = req.body;
    const user = res.locals.user;

    console.log(user);

    if (data && data.title) {
      const result = await Property.create({
        ...data,
        datePosted: new Date(),
        dateEdit: new Date(),
        author: {
          id: user._id,
          email: user.email,
          userType: user.userType,
          name: "name",
          surname: "surname",
          cell: "0999999999",
          imageRef: "",
        },
      });

      if (result) res.sendStatus(201);
      else res.sendStatus(500);
    } else {
      res.status(400).send({ message: "missing title" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.property_put = async (req, res) => {
  const data = req.body;

  res.send({
    method: "put",
    ...data,
  });
};

exports.property_delete = async (req, res) => {
  const id = req.params.id;

  res.send({
    method: "delete",
    id,
  });
};

exports.properties_get = async (req, res) => {
  try {
    const page = positiveNumOrDefault(req.query.page, 1);

    const properties = await Property.find().limit(
      propertyConfig.propertiesPerPage
    );
    res.status(200).send({
      page,
      propertiesPerPage: propertyConfig.propertiesPerPage,
      properties,
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.propertyImage_delete = async (req, res) => {
  const id = req.params.id;

  res.send({
    method: "delete",
    id,
  });
};

exports.propertyImage_post = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });

  // res.send({
  //   method: "post",
  //   ...req,
  // });
};

exports.contact_post = async (req, res) => {
  const data = req.data;

  res.send({
    method: "post",
    data,
  });
};
