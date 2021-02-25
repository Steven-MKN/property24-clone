const { propertiesPerPage } = require("../config/config");
const { positiveNumOrDefault } = require("../utils/utils");

exports.property_get = async (req, res) => {
  const id = req.params.id;

  res.send({
    method: "get",
    id,
  });
};

exports.property_post = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  if (!id) res.send(400);

  res.send({
    method: "post",
    id,
    ...data,
  });
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
  const page = positiveNumOrDefault(req.query.page, 1);

  res.send({
    method: "get",
    page,
    propertiesPerPage,
  });
};

exports.propertyImage_delete = async (req, res) => {
  const id = req.params.id;

  res.send({
    method: "delete",
    id,
  });
};

exports.propertyImage_post = async (req, res) => {
  res.send({
    method: "post",
  });
};

exports.contact_post = async (req, res) => {
  const data = req.data;

  res.send({
    method: "post",
    data,
  });
};
