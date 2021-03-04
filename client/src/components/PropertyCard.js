const PropertyCard = (props) => {
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
            src="house1.jpg"
            className="card-property-main-image"
            alt="..."
          />
        </div>
        <div className="col s3 card-property-aside-images-div">
          <img
            src="house2.jpg"
            className="card-property-aside-images"
            alt="..."
          />
          <img
            src="house3.jpg"
            className="card-property-aside-images"
            alt="..."
          />
          <img
            src="house4.jpg"
            className="card-property-aside-images"
            alt="..."
          />
        </div>
      </div>
      <div className="card-property-info">
        <div className="row">
          <h5 className="blue-text darken-3 col m3 s12">R 2 700 000</h5>
          <span className="grey-text darken-2 col m9 s12">
            3 Bedroom House in{" "}
            <strong className="black-text darken-4">Montana Park</strong>
          </span>
        </div>
        <div className="row card-icons">
          <span className="card-details-icon-span">
            <img
              src="/icon_bed_new.svg"
              className="card-details-icon"
              alt="..."
            />
            3
          </span>
          <span className="card-details-icon-span">
            <img
              src="/icon_bath_new.svg"
              className="card-details-icon"
              alt="..."
            />
            3
          </span>
          <span className="card-details-icon-span">
            <img
              src="/icon_parking.svg"
              className="card-details-icon"
              alt="..."
            />
            3
          </span>
          <span className="card-details-icon-span">
            <img
              src="/icon_floor_new.svg"
              className="card-details-icon"
              alt="..."
            />
            317 m<sup>2</sup>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
