import PropertyCard from "./PropertyCard";

const PropertiesList = (props) => {
  const propertiesList = props.properties.map((p) => (
    <PropertyCard {...p} key={p._id} />
  ));
  return propertiesList;
};

export default PropertiesList;
