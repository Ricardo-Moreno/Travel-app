import { useState } from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardDetailDialog from "../DestinationDetail/CardDetailDialog";

const DestinationCard = ({ destination }) => {
  const [showDialog, setShowDialog] = useState();

  const handleClick = () => {
    setShowDialog(true);
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  return (
    <div className="group relative">
      <Carousel showThumbs={false} dynamicHeight={true}>
        {destination.imageUrl.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={destination.name}
              className="h-56 w-40 object-cover object-center"
            />
          </div>
        ))}
      </Carousel>
      <div onClick={handleClick}>
        <h3 className="mt-6 text-sm text-gray-500">
          {/* <a href={destination.href}> */}
          <span className="absolute inset-0" />
          {destination.title}
          {/* </a> */}
        </h3>
        <p className="text-base font-semibold text-gray-900">
          {destination.description}
        </p>
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
