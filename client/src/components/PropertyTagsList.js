const PropertyTagsList = ({ tags }) => {
  return (
    <div className="col m8 s12 flex">
      {tags.map((tag, i, arr) => {
        return (
          <div className="chip" key={i}>
            {tag}
          </div>
        );
      })}
    </div>
  );
};

export default PropertyTagsList;
