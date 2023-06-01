import { useState } from "react";
import Search from "../Search/Search";
import SearchDestination from "../SearchDestination/SearchDestination";

const SearchContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <>
      <div>
        <Search onSearch={handleSearch} />
        <SearchDestination
          searchQuery={searchQuery}
          onSearchResults={handleSearchResults}
        />

        {searchQuery !== "" && (
          <div>
            {searchResults.length > 0 ? (
              <>
                {searchResults.map((result) => (
                  <p key={result.id}>{result.name}</p>
                ))}
              </>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchContainer;
