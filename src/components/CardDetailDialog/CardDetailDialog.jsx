import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import GoogleMapsButton from "../GoogleMapsButton/GoogleMapsButton";
import Info from "../StartRaiting/Info";

const CardDetailDialog = ({ destination, isOpen, onClose }) => {
  const { imageUrl, title, description, price, rating, duration, location } =
    destination;
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClose = () => {
    setCurrentSlide(0);
    onClose();
  };

  const handleViewMore = () => {
    window.location.href = "/travelPrueba/";
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
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
                <div className="sm:mr-6 w-full">
                  <div className="w-full">
                    <div className="relative w-full">
                      <Carousel
                        showThumbs={false}
                        dynamicHeight={true}
                        selectedItem={currentSlide}
                        onChange={setCurrentSlide}
                        showStatus={false}
                      >
                        {imageUrl.map((image, index) => (
                          <div key={index}>
                            <img
                              src={image}
                              alt={title}
                              className="h-56 w-full object-cover object-center mx-auto"
                            />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flez mx-2">
                  <p className="text-lg font-semibold mb-2">Precio: ${price}</p>
                  <p className="text-lg font-semibold mb-2">
                    Duracion: {duration}
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <Info rating={rating} />
                </div>

                <GoogleMapsButton location={location} />

                <button className="my-4" disabled={!isOpen}>
                  <Link
                    to="/travelPrueba/"
                    onClick={handleViewMore}
                    className="my-4 px-4 py-2 text-sm font-semibold bg-white text-custom-salmon rounded-sm shadow-md hover:bg-custom-salmon hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-salmon"
                  >
                    Ver más destinos
                  </Link>
                </button>
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
    duration: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CardDetailDialog;
