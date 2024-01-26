import "./Featured.scss";
import screengrab from "../../assets/images/screengrab1.png";

const Featured = () => {
  return (
    <div className="featured">
        <img className="featured__image" src={screengrab} />
    </div>
  );
};

export default Featured;