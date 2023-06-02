import Coments from "./Coments";
import PropTypes from "prop-types";
import StartRating from "./StartRating";

const Info = ({ rating }) => {
  const handleRatingChange = (newRating) => {
    console.log("Nuevo rating:", newRating);
  };

  return (
    <div className="flex mx-2">
      <div className="mx-2">
        <StartRating rating={rating} onChange={handleRatingChange} />
      </div>
      <div className="mx-2">
        <Coments />
      </div>
    </div>
  );
};

Info.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Info;
