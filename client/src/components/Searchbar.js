import { useState } from "react";
import SearchToggleItems from "./SearchToggleItems";

const Searchbar = (props) => {
  const [selectedPropertyTypeIndex, setSelectedPropertyTypeIndex] = useState(0);

  const onPropertyTypeSelected = (i) => {
    setSelectedPropertyTypeIndex(i);
  };

  return (
    <div className="blue darken-3 searchbar">
      <h1 className="white-text seachbar-h1">Find Property for Sale</h1>
      <div className="container row">
        <div className="row col s10 m6">
          <SearchToggleItems
            index={selectedPropertyTypeIndex}
            onPropertyTypeSelected={onPropertyTypeSelected}
          />
        </div>
      </div>
      <div className="row">
        <input
          placeholder="Search for a City, Surburb or ID"
          type="text"
          className="col m9 white-text"
        ></input>
        <div className="btn col m2 red darken-1">
          <span>Search</span>
        </div>
      </div>
      <div className="row">
        <div className="col s4 white-text">
          Min Price
          <select className="input-field search-select" defaultValue="any">
            <option value="any">
              Any
            </option>
            <option value="100000">100 000</option>
            <option value="200000">200 000</option>
            <option value="300000">300 000</option>
            <option value="500000">500 000</option>
            <option value="1000000">1 000 000</option>
            <option value="2000000">2 000 000</option>
            <option value="3000000">3 000 000</option>
            <option value="5000000">5 000 000</option>
          </select>
        </div>
        <div className="col s4 white-text">
          Max Price
          <select className="input-field search-select" defaultValue="any">
            <option value="any" >
              Any
            </option>
            <option value="100000">100 000</option>
            <option value="200000">200 000</option>
            <option value="300000">300 000</option>
            <option value="500000">500 000</option>
            <option value="1000000">1 000 000</option>
            <option value="2000000">2 000 000</option>
            <option value="3000000">3 000 000</option>
            <option value="5000000">5 000 000</option>
          </select>
        </div>
        <div className="col s4 white-text">
          Bedrooms
          <select className="input-field search-select" defaultValue="any">
            <option value="any" >
              Any
            </option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
