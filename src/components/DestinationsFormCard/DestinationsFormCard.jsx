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
    <div className="group relative mx-2 my-2">
      <Carousel showThumbs={false} dynamicHeight={true}>
        {destinationForm.imageUrl.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={destinationForm.name}
              className="h-56 w-full object-cover object-center rounded-md"
            />
          </div>
        ))}
      </Carousel>
      <div onClick={handleClick}>
        <h3 className="mt-2 text-sm font-bold text-custom-black">
          {destinationForm.title}
        </h3>
        <p className="mt-1 text-sm text-gray-900">
          {destinationForm.description}
        </p>
        <button
          onClick={handleClick}
          className="mt-2 px-2 py-2 text-sm text-custom-salmon hover:text-white  hover:bg-custom-salmon rounded-sm focus:outline-none"
        >
          Ver más
        </button>
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
