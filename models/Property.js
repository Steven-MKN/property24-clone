const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  title: String,
  details: String,
  author: {
    email: String,
    userType: String,
    name: String,
    surname: String,
    cell: String,
    imageRef: String,
    id: String,
  },
  images: [{ type: String }],
  datePosted: Date,
  dateEdit: Date,
  address: {
    streetAddress: String,
    suburb: String,
    city: String,
    province: String,
    postalCode: Number,
  },
  cost: Number,
  tags: [{ type: String }],
  listType: String,
  bedroomCount: Number,
  bathroomCount: Number,
  garageCount: Number,
  area: Number,
});

// static method to search for property by city, surburb or id
propertySchema.statics.search = async function (keyword) {
  const properties = await this.find({
    $or: [
      { _id: keyword },
      { title: /keyword/ },
      { "address.city": /keyword/ },
      { "address.suburb": /keyword/ },
    ],
  });

  if (properties) {
    console.log(properties);

    return properties;
  }
  throw Error("Incorrect email");
};

const Property = mongoose.model("property", propertySchema);

module.exports = Property;
