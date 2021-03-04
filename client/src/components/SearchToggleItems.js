const SearchToggleItems = ({ index, onPropertyTypeSelected }) => {
  return [
    <div
      className={
        "col s4 white-text property-type" + (index === 0 ? " underline" : "")
      }
      onClick={() => onPropertyTypeSelected(0)}
      key={0}
    >
      All
    </div>,
    <div
      className={
        "col s4 white-text property-type" + (index === 1 ? " underline" : "")
      }
      onClick={() => onPropertyTypeSelected(1)}
      key={1}
    >
      For Sale
    </div>,
    <div
      className={
        "col s4 white-text property-type" + (index === 2 ? " underline" : "")
      }
      onClick={() => onPropertyTypeSelected(2)}
      key={2}
    >
      To Rent
    </div>,
  ];
};

export default SearchToggleItems;
