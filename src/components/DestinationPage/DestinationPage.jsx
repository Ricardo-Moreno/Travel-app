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
    <>
      <DestinationsList destinations={destinations} />
    </>
  );
};

export default DestinationPage;
