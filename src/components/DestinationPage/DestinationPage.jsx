import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import DestinationsList from "../DestinationsList/DestinationList";

const DestinationPage = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      const db = getFirestore();
      const destinationsQuerySnapshot = await getDocs(collection(db, "items"));
      const destinationsFormDataQuerySnapshot = await getDocs(
        collection(db, "destinations")
      );

      const destinationsData = destinationsQuerySnapshot.docs.map((doc) => ({
        id: doc.id,
        type: "destination",
        ...doc.data(),
      }));

      const destinationsFormData = destinationsFormDataQuerySnapshot.docs.map(
        (doc) => ({
          id: doc.id,
          type: "destinationForm",
          ...doc.data(),
        })
      );

      const combinedDestinations = [
        ...destinationsData,
        ...destinationsFormData,
      ];
      setDestinations(combinedDestinations);
    };

    fetchDestinations();
  }, []);

  return (
    <>
      <DestinationsList destinations={destinations} />
    </>
  );
};

export default DestinationPage;
