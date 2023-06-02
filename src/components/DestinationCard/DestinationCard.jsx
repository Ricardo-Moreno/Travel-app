import { useState } from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardDetailDialog from "../CardDetailDialog/CardDetailDialog";
import StartRating from "../StartRaiting/StartRating";

const DestinationCard = ({ destination }) => {
  const [showDialog, setShowDialog] = useState();

  const handleClick = () => {
    setShowDialog(true);
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  const handleRatingChange = (newRating) => {
    console.log("Nuevo rating:", newRating);
  };

  return (
    <div className="group relative mx-2 my-2">
      <Carousel showThumbs={false} dynamicHeight={true} showStatus={false}>
        {destination.imageUrl.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={destination.name}
              className="h-56 w-full object-cover object-center rounded-md"
            />
          </div>
        ))}
      </Carousel>
      <div onClick={handleClick}>
        <h3 className="mt-2 text-sm font-bold text-custom-black">
          {destination.title}
        </h3>
        <p className="mt-1 text-sm text-gray-900">{destination.description}</p>
        <p className="mt-1 text-sm font-bold text-custom-black">
          Por {destination.duration}{" "}
          <StartRating
            rating={destination.rating}
            onChange={handleRatingChange}
          />
        </p>
        <button
          onClick={handleClick}
          className="mt-2 px-2 py-2 text-sm text-custom-salmon hover:text-white  hover:bg-custom-salmon rounded-sm focus:outline-none"
        >
          Ver más
        </button>
      </div>

      {showDialog && (
        <CardDetailDialog
          destination={destination}
          isOpen={showDialog}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

DestinationCard.propTypes = {
  destination: PropTypes.shape({
    imageUrl: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default DestinationCard;
