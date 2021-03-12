import PropertyCard from "./PropertyCard";

const PropertiesList = (props) => {
  const propertiesList = props.properties.map((p) => <PropertyCard {...p} />);
  return propertiesList;
};

export default PropertiesList;
