import { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <>
      <div className="relative z-10">
        <div className="my-6 mx-6 h-16 items-center justify-between">
          <form onSubmit={handleSearch} className="items-center">
            <div className="relative">
              <input
                className="w-full py-2 px-4 pr-10 leading-tight border  appearance-none focus:outline-none focus:border-custom-black"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar"
              />
              <div className="absolute top-0 right-0 mt-2 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
