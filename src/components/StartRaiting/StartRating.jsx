import PropTypes from "prop-types";
// import { Transition } from "@headlessui/react";

const StarRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starClass = i <= rating ? "text-yellow-500" : "text-gray-300";

      stars.push(
        <svg
          key={i}
          className={`h-5 w-5 inline ${starClass}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 0l3.09 6.31 6.9.99L13.64 10l2.35 5.7-6.9-.99L10 20l-2.1-4.29-6.9.99L6.36 10 .46 4.29l6.9.99L10 0z"
          />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="flex items-center">
      <div
        className={`transition ease-out duration-300 transform ${
          rating === 0 ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {renderStars()}
      </div>
      <span className="text-gray-500">{rating}/5</span>
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
