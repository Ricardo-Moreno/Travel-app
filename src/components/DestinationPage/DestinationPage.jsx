import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import DestinationsList from "../DestinationsList/DestinationList";

const DestinationPage = () => {
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const destinationsQuerySnapshot = await getDocs(itemsCollection);

        const destinationsData = destinationsQuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          type: "destination",
          ...doc.data(),
        }));

        setDestinations(destinationsData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching destinations:", error);
        setIsLoading(false);
      }
    };

    fetchDestinations();
  }, []);

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

export default DestinationPage;
