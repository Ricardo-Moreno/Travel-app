import { useState } from "react";
import PropTypes from "prop-types";

const StartRating = ({ rating, onChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleRatingChange = (newRating) => {
    onChange(newRating);
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starClass =
        i <= (hoverRating || rating) ? "text-custom-salmon" : "text-gray-300";

      stars.push(
        <svg
          key={i}
          className={`h-6 w-6 inline ${starClass}`}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          onMouseEnter={() => setHoverRating(i)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => handleRatingChange(i)}
        >
          <path d="M12 2 L16 9 22 9 17 14 20 22 12 17 4 22 7 14 2 9 8 9 Z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="flex">{renderStars()}</div>
      <span className="text-gray-500">{rating}/5</span>
    </div>
  );
};

StartRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StartRating;
