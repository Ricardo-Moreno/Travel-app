import { useState } from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardDetailDialogForm from "../DestinationDetailForm/CardDetailDialogForm";

const DestinationFormCard = ({ destinationForm }) => {
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
        {destinationForm.imageUrl.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={destinationForm.name}
              className="h-56 w-40 object-cover object-center"
            />
          </div>
        ))}
      </Carousel>
      <div onClick={handleClick}>
        <h3 className="mt-6 text-sm text-gray-500">
          {/* <a href={destination.href}> */}
          <span className="absolute inset-0" />
          {destinationForm.title}
          {/* </a> */}
        </h3>
        <p className="text-base font-semibold text-gray-900">
          {destinationForm.description}
        </p>
      </div>

      {showDialog && (
        <CardDetailDialogForm
          destinationForm={destinationForm}
          isOpen={showDialog}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

DestinationFormCard.propTypes = {
  destinationForm: PropTypes.shape({
    imageUrl: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default DestinationFormCard;
