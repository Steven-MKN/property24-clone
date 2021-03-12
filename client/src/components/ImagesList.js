import { api } from "../config";

const ImagesList = (props) => {
  return (
    <div className="flex">
      {props.images.map((imageName, i, arr) => {
        return (
          <img
            src={api + "/public/" + imageName}
            width="40px"
            height="40px"
            key={i}
            alt="..."
          />
        );
      })}
    </div>
  );
};

export default ImagesList;
