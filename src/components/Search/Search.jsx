import { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search"
      />
      <button
        type="submit"
        className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a7 7 0 100 14A7 7 0 009 2zm7.707 14.293a1 1 0 01-1.414 1.414l-4.142-4.142A5.5 5.5 0 1114.5 7h.038a5.5 5.5 0 01.012 10.995L15 18.5l-.001-.001a1 1 0 01-1.292 1.517z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
