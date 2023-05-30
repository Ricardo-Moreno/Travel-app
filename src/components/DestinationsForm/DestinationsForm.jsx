import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import DestinationsFormList from "../DestinationsFormList/DestinationFormList";

const DestinationsForm = () => {
  const [destinationsForm, setDestinationsForm] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, "destinations"));
      const destinationsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDestinationsForm(destinationsData);
    };

    fetchDestinations();
  }, []);

  return (
    <>
      <DestinationsFormList destinationsForm={destinationsForm} />
    </>
  );
};

export default DestinationsForm;
