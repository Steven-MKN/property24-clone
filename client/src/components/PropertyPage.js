import { api } from "../config";
import { numToReadFormat } from "../utils";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ImageGallery from "react-image-gallery";
import ContactAgentForm from "./ContactAgentForm";

const PropertyPage = (props) => {
  const params = useParams();
  const id = params.id;

  const [propertyData, setPropertyData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const url = api + "/property/" + id;
      const response = await axios.get(url);
      console.log(response);
      setPropertyData(response.data.property);
    }

    fetchData();
  }, []);

  return (
    <>
      {propertyData ? (
        <div className="container property-page-main-div">
          <div className="row">
            <ImageGallery
              items={
                propertyData
                  ? propertyData.images.map((i) => {
                      return {
                        original: api + "/public/" + i,
                        thumbnail: api + "/public/" + i,
                      };
                    })
                  : []
              }
            />
          </div>
          <div className="card-property-info">
            <div className="row">
              <h5 className="blue-text darken-3 col m3 s12">
                R {numToReadFormat(propertyData.cost)}
              </h5>
            </div>

            <div className="col m12 s12">
              <h4>
                {propertyData.bedroomCount} Bedroom House in{" "}
                <strong className="">{propertyData.address.suburb}</strong>
              </h4>
            </div>

            <div className="col m12 s12">
              <a
                href=""
                target="_blank"
              >{`${propertyData.address.streetAddress} ${propertyData.address.suburb} ${propertyData.address.city} ${propertyData.address.postalCode}`}</a>
            </div>

            <div className="row card-icons">
              <span className="card-details-icon-span">
                <img
                  src="/icon_bed_new.svg"
                  className="card-details-icon"
                  alt="..."
                />
                {propertyData.bedroomCount}
              </span>
              <span className="card-details-icon-span">
                <img
                  src="/icon_bath_new.svg"
                  className="card-details-icon"
                  alt="..."
                />
                {propertyData.bathroomCount}
              </span>
              <span className="card-details-icon-span">
                <img
                  src="/icon_parking.svg"
                  className="card-details-icon"
                  alt="..."
                />
                {propertyData.garageCount}
              </span>
              <span className="card-details-icon-span">
                <img
                  src="/icon_floor_new.svg"
                  className="card-details-icon"
                  alt="..."
                />
                {numToReadFormat(propertyData.area)} m<sup>2</sup>
              </span>
            </div>

            <div className="">
              <p>{propertyData.details}</p>
            </div>
          </div>

          <ContactAgentForm
            id={id}
            surburb={propertyData.address.suburb}
            agentId={propertyData.author.id}
          />
        </div>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default PropertyPage;
