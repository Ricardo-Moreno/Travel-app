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
