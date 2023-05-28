import React, { useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import StarRating from "../StartRaiting/StartRating"; // Componente de las estrellas de puntuación
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const MyComponent = React.forwardRef(({ children }, ref) => {
  return <div ref={ref}>{children}</div>;
});

MyComponent.displayName = "MyComponent";

MyComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

const CardDetailDialog = ({ destination, isOpen, onClose }) => {
  const isDialogOpen = isOpen !== undefined ? isOpen : false;
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClose = () => {
    setCurrentSlide(0);
    onClose();
  };
  return (
    <Transition.Root show={isDialogOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={MyComponent} // Utilizamos MyComponent como valor de `as`
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={MyComponent} // Utilizamos MyComponent como valor de `as`
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
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
                      <StarRating rating={destination.rating} />
                      <span className="text-gray-600 ml-2"></span>
                    </div>
                    <p className="text-lg font-semibold mb-2">
                      ${destination.price}
                    </p>
                    <Link
                      to="/form"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md"
                    >
                      Seguir Viendo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
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
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CardDetailDialog;
