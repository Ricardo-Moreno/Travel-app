import { useParams } from "react-router-dom";
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

const Categories = () => {
  const { category } = useParams();
  const [destinations, setDestinations] = useState([]);
  const [otherDestinations, setOtherDestinations] = useState([]);
  const categories = category.toLowerCase();

  useEffect(() => {
    const fetchDestinations = async () => {
      const db = getFirestore();
      const destinationsCollection = collection(db, "items");
      const q = query(
        destinationsCollection,
        where("category", "==", categories)
      );
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
        where("category", "==", categories)
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
  }, [categories]);

  return (
    <div>
      <DestinationsList destinations={destinations} />
      <DestinationsList destinations={otherDestinations} />
    </div>
  );
};

Categories.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Categories;
