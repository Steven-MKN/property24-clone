import { api } from "../config";
import { numToReadFormat } from "../utils";

const PropertyCard = (p) => {
  return (
    <div className="container property-card">
      <div className="card-heading">
        <div className="blue lighten-3 card-profile-image-div">
          <img src="dp.svg" className="card-profile-image" alt="..." />
        </div>
        <h6 className="black-text card-heading-text">Someone Here</h6>
      </div>
      <div className="row card-property-collage-div">
        <div className="col s9 card-property-main-image-div">
          <img
            src={p.images[0] ? api + "/public/" + p.images[0] : "camera.svg"}
            className="card-property-main-image"
            alt="..."
          />
        </div>
        <div className="col s3 card-property-aside-images-div">
          <div className="card-property-aside-image-div">
            <img
              src={p.images[1] ? api + "/public/" + p.images[1] : "camera.svg"}
              className="card-property-aside-images"
              alt="..."
            />
          </div>

          <div className="card-property-aside-image-div">
            <img
              src={p.images[2] ? api + "/public/" + p.images[2] : "camera.svg"}
              className="card-property-aside-images"
              alt="..."
            />
          </div>
          <div className="card-property-aside-image-div">
            <img
              src={p.images[3] ? api + "/public/" + p.images[3] : "camera.svg"}
              className="card-property-aside-images"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="card-property-info">
        <div className="row">
          <h5 className="blue-text darken-3 col m3 s12">
            R {numToReadFormat(p.cost)}
          </h5>
          <span className="grey-text darken-2 col m9 s12">
            {p.bedroomCount} Bedroom House in{" "}
            <strong className="black-text darken-4">{p.address.suburb}</strong>
          </span>
        </div>
        <div className="row card-icons">
          <span className="card-details-icon-span">
            <img
              src="/icon_bed_new.svg"
              className="card-details-icon"
              alt="..."
            />
            {p.bedroomCount}
          </span>
          <span className="card-details-icon-span">
            <img
              src="/icon_bath_new.svg"
              className="card-details-icon"
              alt="..."
            />
            {p.bathroomCount}
          </span>
          <span className="card-details-icon-span">
            <img
              src="/icon_parking.svg"
              className="card-details-icon"
              alt="..."
            />
            {p.garageCount}
          </span>
          <span className="card-details-icon-span">
            <img
              src="/icon_floor_new.svg"
              className="card-details-icon"
              alt="..."
            />
            {numToReadFormat(p.area)} m<sup>2</sup>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
