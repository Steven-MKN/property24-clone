const PropertyCreateAddress = ({ listingCreate, handleOnAddressChange }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="input-field col m6 s12">
          <input
            id="streetAddress"
            type="text"
            className="validate"
            value={listingCreate.address.streetAddress}
            onChange={handleOnAddressChange}
          />
          <label htmlFor="streetAddress">Street Address</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col m6 s12">
          <input
            id="suburb"
            type="text"
            className="validate"
            value={listingCreate.address.suburb}
            onChange={handleOnAddressChange}
          />
          <label htmlFor="suburb">Suburb</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col m6 s12">
          <input
            id="city"
            type="text"
            className="validate"
            value={listingCreate.address.city}
            onChange={handleOnAddressChange}
          />
          <label htmlFor="city">City</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col m6 s12">
          <input
            id="province"
            type="text"
            className="validate"
            value={listingCreate.address.province}
            onChange={handleOnAddressChange}
          />
          <label htmlFor="province">Province</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col m6 s12">
          <input
            id="postalCode"
            type="number"
            className="validate"
            value={listingCreate.address.postalCode}
            onChange={handleOnAddressChange}
          />
          <label htmlFor="postalCode">Postal Code</label>
        </div>
      </div>
    </div>
  );
};

export default PropertyCreateAddress;
