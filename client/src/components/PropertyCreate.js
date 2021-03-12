import axios from "axios";
import { useState } from "react";
import { api } from "../config";
import ImagesList from "./ImagesList";
import PropertyCreateAddress from "./PropertyCreateAddress";
import PropertyTagsList from "./PropertyTagsList";
import FormData from "form-data";
import { Redirect } from "react-router-dom";

const PropertyCreate = (props) => {
  const [listingCreate, setListingCreate] = useState({
    title: "",
    details: "",
    image: "",
    images: [],
    address: {
      streetAddress: "",
      suburb: "",
      city: "",
      province: "",
      postalCode: "",
    },
    cost: "",
    tags: [],
    tag: "",
    listType: "forSale",
    bedroomCount: "",
    bathroomCount: "",
    garageCount: "",
    area: "",
  });

  const [createRedirect, setCreateRedirect] = useState(null);

  const handleOnChange = (e) => {
    setListingCreate({
      ...listingCreate,
      [e.target.id]: e.target.value,
    });
  };

  const handleOnAddressChange = (e) => {
    setListingCreate({
      ...listingCreate,
      address: {
        ...listingCreate.address,
        [e.target.id]: e.target.value,
      },
    });
  };

  const handleAddTag = () => {
    if (listingCreate.tag.length > 0) {
      const toAdd = listingCreate.tag;
      setListingCreate({
        ...listingCreate,
        tags: [...listingCreate.tags, toAdd],
        tag: "",
      });
    }
  };

  const handleListTypeChange = (e) => {
    setListingCreate({
      ...listingCreate,
      listType: e.target.value,
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    console.log(file);

    if (file) {
      const url = api + "/property/image";

      let data = new FormData();
      data.append("file", file);

      const response = await axios.post(url, data);

      setListingCreate({
        ...listingCreate,
        images: [...listingCreate.images, response.data.filename],
      });

      console.log(response);
    }
  };

  const handleCreateListing = async () => {
    if (validInputs) {
      const url = api + "/property";
      const data = {
        ...listingCreate,
      };

      const results = await axios.post(url, data);
      if (results.status === 201) {
        alert("property created successfully");
        setCreateRedirect("/");
      } else {
        alert("an error occured, please try again later");
      }
    }
  };

  const validInputs = () => {
    return true;
  };

  return (
    <>
      {createRedirect ? <Redirect to={createRedirect} /> : null}
      <div className="container property-card">
        <div className="row">
          <div className="input-field col m6 s12">
            <input
              id="title"
              type="text"
              className="validate"
              value={listingCreate.title}
              onChange={handleOnChange}
            />
            <label htmlFor="title">Listing Title</label>
          </div>
        </div>

        <div className="row">
          <div className="btn file-field col m2 s4">
            <span>
              <i className="material-icons left">add_a_photo</i>Add
            </span>
            <input
              id="image"
              type="file"
              accept="image/*"
              onInput={handleImageUpload}
            />
          </div>

          <div className="col m9 s12">
            <ImagesList images={listingCreate.images} />
          </div>
        </div>

        <PropertyCreateAddress
          listingCreate={listingCreate}
          handleOnAddressChange={handleOnAddressChange}
        />

        <div className="row">
          <div className="input-field col m2 s7">
            <input
              id="tag"
              type="text"
              className="validate"
              value={listingCreate.tag}
              onChange={handleOnChange}
            />
            <label htmlFor="tag">Tag</label>
          </div>

          <a
            href="#/"
            className="waves-effect waves-light btn col m2 s4"
            onClick={handleAddTag}
          >
            <i className="material-icons left">add</i>Add Tag
          </a>

          <PropertyTagsList tags={listingCreate.tags} />
        </div>

        <div className="row">
          <div className="input-field col m4 s6">
            <input
              id="cost"
              type="number"
              className="validate"
              value={listingCreate.cost}
              onChange={handleOnChange}
            />
            <label htmlFor="cost">Selling Price in Rands</label>
          </div>
        </div>

        <div className="row">
          <div className="col s6 m4 blue-text">
            <select
              className="input-field search-select"
              value={listingCreate.listType}
              id="listType"
              onChange={handleListTypeChange}
            >
              <option value="forSale">For Sale</option>
              <option value="rental">Rental</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field col m4 s6">
            <input
              id="bedroomCount"
              type="number"
              className="validate"
              value={listingCreate.bedroomCount}
              onChange={handleOnChange}
            />
            <label htmlFor="bedroomCount">Number of bedrooms</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col m4 s6">
            <input
              id="bathroomCount"
              type="number"
              className="validate"
              value={listingCreate.bathroomCount}
              onChange={handleOnChange}
            />
            <label htmlFor="bathroomCount">Number of bathrooms</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col m4 s6">
            <input
              id="garageCount"
              type="number"
              className="validate"
              value={listingCreate.garageCount}
              onChange={handleOnChange}
            />
            <label htmlFor="garageCount">Number of garages</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col m4 s6">
            <input
              id="area"
              type="number"
              className="validate"
              value={listingCreate.area}
              onChange={handleOnChange}
            />
            <label htmlFor="area">
              Area in m<sup>2</sup>
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <textarea
              id="details"
              className="materialize-textarea"
              value={listingCreate.details}
              onChange={handleOnChange}
            ></textarea>
            <label htmlFor="details">Details</label>
          </div>
        </div>

        <a
          href="#/"
          className="waves-effect waves-light btn"
          onClick={handleCreateListing}
        >
          Create Listing
        </a>
      </div>
    </>
  );
};

export default PropertyCreate;
