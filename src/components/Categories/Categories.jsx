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
    };

    fetchDestinations();
  }, [categories]);

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32"></div>
          <DestinationsList destinations={destinations} />
        </div>
      </div>
    </div>
  );
};

export default Categories;
