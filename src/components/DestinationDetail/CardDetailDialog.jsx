import { useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import StarRating from "../StartRaiting/StartRating"; // Componente de las estrellas de puntuación
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

import GoogleMapsButton from "../GoogleMapsButton/GoogleMapsButton";

const CardDetailDialog = ({ destination, isOpen, onClose }) => {
  const isDialogOpen = isOpen !== undefined ? isOpen : false;
  const [Open, setOpen] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [rating, setRating] = useState(destination.rating);

  const handleClose = () => {
    setCurrentSlide(0);
    onClose();
  };

  const handleViewMore = () => {
    setOpen(false); // Cerrar la ventana de diálogo
    window.location.href = "/travelPrueba/";
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <Transition.Root show={isDialogOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="sm:mr-6">
                  {/* Aquí va el carrusel de imágenes */}
                  <div className="w-full">
                    <div className="relative">
                      <Carousel
                        showThumbs={false}
                        dynamicHeight={true}
                        selectedItem={currentSlide}
                        onChange={setCurrentSlide}
                      >
                        {destination.imageUrl.map((image, index) => (
                          <div key={index}>
                            <img
                              src={image}
                              alt={destination.title}
                              className="h-56 w-40 object-cover object-center"
                            />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    {destination.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {destination.description}
                  </p>
                  <div className="flex items-center mb-4">
                    <StarRating rating={rating} onChange={handleRatingChange} />
                    <span className="text-gray-600 ml-2"></span>
                  </div>
                  <p className="text-lg font-semibold mb-2">
                    ${destination.price}
                  </p>
                  <GoogleMapsButton location={destination.location} />
                  <button>
                    {Open && (
                      <Link
                        to="/travelPrueba/"
                        onClick={handleViewMore}
                        className="px-4 py-2 text-sm font-semibold bg-white text-indigo-600 rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                      >
                        Ver más destinos
                      </Link>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

CardDetailDialog.propTypes = {
  destination: PropTypes.shape({
    imageUrl: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired, // Agregando validación para la propiedad location
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CardDetailDialog;
