import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import DestinationsList from "../DestinationsList/DestinationList";

const SearchDestination = ({ searchQuery }) => {
  const [destinations, setDestinations] = useState([]);
  const [otherDestinations, setOtherDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      const db = getFirestore();
      const destinationsCollection = collection(db, "items");
      const q = query(destinationsCollection, where("name", "==", searchQuery));
      const querySnapshot = await getDocs(q);
      const destinationsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDestinations(destinationsData);
    };

    const fetchOtherDestinations = async () => {
      const db = getFirestore();
      const otherDestinationsCollection = collection(db, "destinations");
      const q = query(
        otherDestinationsCollection,
        where("name", "==", searchQuery)
      );
      const querySnapshot = await getDocs(q);
      const destinationsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOtherDestinations(destinationsData);
    };

    fetchDestinations();
    fetchOtherDestinations();
  }, [searchQuery]);

  return (
    <div>
      <DestinationsList destinations={destinations} />
      <DestinationsList destinations={otherDestinations} />
    </div>
  );
};

SearchDestination.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default SearchDestination;
