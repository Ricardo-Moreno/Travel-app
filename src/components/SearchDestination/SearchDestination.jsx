import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import SearchResults from "./SearchResult";

const SearchDestination = ({ searchQuery }) => {
  const [destinations, setDestinations] = useState([]);
  const [otherDestinations, setOtherDestinations] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      const db = getFirestore();
      const destinationsCollection = collection(db, "items");
      const q = query(
        destinationsCollection,
        where("name", "==", searchQuery.toLowerCase())
      );
      const querySnapshot = await getDocs(q);
      const destinationsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDestinations(destinationsData);
      setIsLoading(false);
      setShowSearchResults(true);
    };

    const fetchOtherDestinations = async () => {
      const db = getFirestore();
      const otherDestinationsCollection = collection(db, "destinations");
      const q = query(
        otherDestinationsCollection,
        where("name", "==", searchQuery.toLowerCase())
      );
      const querySnapshot = await getDocs(q);
      const destinationsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOtherDestinations(destinationsData);
      setIsLoading(false);
      setShowSearchResults(true);
    };

    if (searchQuery !== "") {
      setIsLoading(true);
      fetchDestinations();
      fetchOtherDestinations();
    }
  }, [searchQuery]);

  if (searchQuery === "") {
    return null;
  }

  const handleCloseSearch = () => {
    setShowSearchResults(false);
  };

  const handleContinueSearch = () => {
    setDestinations([]);
    setOtherDestinations([]);
    setShowSearchResults(false);
  };

  return (
    <div>
      {isLoading ? (
        <div className="fixed  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-custom-salmon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-spin w-16 h-18 mx-auto"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>
      ) : (
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {showSearchResults && (
              <SearchResults
                destinations={destinations}
                otherDestinations={otherDestinations}
                onCloseSearch={handleCloseSearch}
                onContinueSearch={handleContinueSearch}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

SearchDestination.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default SearchDestination;
