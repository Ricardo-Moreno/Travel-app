import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import DestinationsList from "../DestinationsList/DestinationList";
import { useParams } from "react-router-dom";

const Categories = () => {
  const { category } = useParams();
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const categories = category.toLowerCase();

  useEffect(() => {
    const fetchDestinations = async () => {
      const db = getFirestore();
      const destinationsCollection = collection(db, "items");
      const otherDestinationsCollection = collection(db, "destinations");

      const qDestinations = query(
        destinationsCollection,
        where("category", "==", categories)
      );
      const qOtherDestinations = query(
        otherDestinationsCollection,
        where("category", "==", categories)
      );

      const destinationsQuerySnapshot = await getDocs(qDestinations);
      const otherDestinationsQuerySnapshot = await getDocs(qOtherDestinations);

      const destinationsData = destinationsQuerySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const otherDestinationsData = otherDestinationsQuerySnapshot.docs.map(
        (doc) => ({
          id: doc.id,
          ...doc.data(),
        })
      );

      const combinedDestinations = [
        ...destinationsData,
        ...otherDestinationsData,
      ];
      setDestinations(combinedDestinations);
      setIsLoading(false);
    };

    fetchDestinations();
  }, [categories]);

  return (
    <div>
      {isLoading ? (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-custom-salmon">
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
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-6"></div>
            <DestinationsList destinations={destinations} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
