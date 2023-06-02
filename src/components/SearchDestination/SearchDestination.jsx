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
      setShowSearchResults(true);
    };

    if (searchQuery !== "") {
      fetchDestinations();
      fetchOtherDestinations();
    }
  }, [searchQuery]);

  if (searchQuery === "") {
    return null; // No renderizar nada si searchQuery está vacío
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
  );
};

SearchDestination.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default SearchDestination;
