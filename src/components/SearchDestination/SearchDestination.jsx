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
    };

    if (searchQuery !== "") {
      fetchDestinations();
      fetchOtherDestinations();
    }
  }, [searchQuery]);

  if (searchQuery === "") {
    return null; // No renderizar nada si searchQuery está vacío
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {destinations.length > 0 || otherDestinations.length > 0 ? (
          <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16">
            <div className="flex justify-center">
              <h2 className="text-4xl font-bold text-cutom-black">
                Destinos Encontrados
              </h2>
            </div>
            <div className="mt-4 sm:mt-6">
              <DestinationsList destinations={destinations} />
            </div>
            <div className="mt-4 sm:mt-6">
              <DestinationsList destinations={otherDestinations} />
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16">
            <div className="flex justify-center">
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline">
                  No hemos encontrado resultados con esa búsqueda.
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

SearchDestination.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default SearchDestination;
