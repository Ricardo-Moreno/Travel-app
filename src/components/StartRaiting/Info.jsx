import Coments from "./Coments";
import PropTypes from "prop-types";
import StartRating from "./StartRating";

const Info = ({ rating }) => {
  const handleRatingChange = (newRating) => {
    console.log("Nuevo rating:", newRating);
  };

  return (
    <div className="flex flex-col mx-2 md:flex-row">
      <div className="flex justify-center mx-6 md:order-2">
        <StartRating rating={rating} onChange={handleRatingChange} />
      </div>
      <div className="mx-auto w-full my-2 md:order-1">
        <Coments />
      </div>
    </div>
  );
};

Info.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Info;
