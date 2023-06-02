import { useState } from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardDetailDialog from "../DestinationDetail/CardDetailDialog";

const DestinationCard = ({ destination }) => {
  const [showDialog, setShowDialog] = useState(false);

  const handleClick = () => {
    setShowDialog(true);
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  return (
    <div className="group relative mx-1">
      <Carousel showThumbs={false} dynamicHeight>
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
        <p className="mt-1 text-sm text-gray-500">{destination.description}</p>
        <button
          onClick={handleClick}
          className="mt-1 px-2 py-2 text-sm text-custom-salmon  hover:bg-custom-salmon rounded-sm focus:outline-none"
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
  }).isRequired,
};

export default DestinationCard;
