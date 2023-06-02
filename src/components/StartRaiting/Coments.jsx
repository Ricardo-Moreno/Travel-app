import { useState } from "react";

const Coments = () => {
  const [comment, setComment] = useState("");
  const [savedComment, setSavedComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSaveComment = () => {
    setSavedComment(comment);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={comment}
        onChange={handleCommentChange}
        placeholder="Escribe tu comentario..."
        className="px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-custom-salmon"
      />
      <button
        className="px-2 py-1 bg-white hover:text-white hover:bg-custom-salmon border-2 border-custom-salmon text-custom-salmon rounded-sm"
        onClick={handleSaveComment}
      >
        Guardar
      </button>
      {savedComment && <p className="text-custom-black">{savedComment}</p>}
    </div>
  );
};

export default Coments;
