import { useState } from "react";
import PropTypes from "prop-types";

const StarRating = ({ rating, onChange }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [savedComment, setSavedComment] = useState("");

  const handleRatingChange = (newRating) => {
    onChange(newRating, savedComment);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSaveComment = () => {
    setSavedComment(comment);
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starClass =
        i <= (hoverRating || rating) ? "text-yellow-500" : "text-gray-300";

      stars.push(
        <svg
          key={i}
          className={`h-5 w-5 inline ${starClass}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          onMouseEnter={() => setHoverRating(i)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => handleRatingChange(i)}
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
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <div className="flex">{renderStars()}</div>
        <span className="text-gray-500">{rating}/5</span>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Escribe tu comentario..."
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
        <button
          className="px-3 py-2 bg-indigo-500 text-white rounded-md"
          onClick={handleSaveComment}
        >
          Guardar
        </button>
      </div>
      {savedComment && <p className="text-gray-600">{savedComment}</p>}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StarRating;
