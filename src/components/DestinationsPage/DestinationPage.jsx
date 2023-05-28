// DestinationPage.js
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import DestinationsList from "../DestinationsList/DestinationList";

const DestinationPage = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, "items"));
      const destinationsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDestinations(destinationsData);
    };

    fetchDestinations();
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-4xl font-bold text-gray-900">Destinos</h2>
          <DestinationsList destinations={destinations} />
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
