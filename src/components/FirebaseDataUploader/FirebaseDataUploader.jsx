import { useState } from "react";
// import { Dialog } from "@headlessui/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseConnection } from "../../fireBase/configFireBase";

const FirebaseDataUploader = ({ formData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const saveDataToFirebase = async (data) => {
    try {
      const app = firebaseConnection();
      const db = getFirestore(app);
      const docRef = await addDoc(collection(db, "destinations"), data);
      console.log("Documento guardado con ID:", docRef.id);
      setIsOpen(true); // Mostrar la ventana de diálogo cuando el envío es exitoso
    } catch (error) {
      console.error("Error al guardar el documento:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveDataToFirebase(formData);
  };

  const handleSuggestAnother = () => {
    setIsOpen(false); // Cerrar la ventana de diálogo
    // Realizar acciones adicionales si es necesario
  };

  const handleViewMore = () => {
    setIsOpen(false); // Cerrar la ventana de diálogo
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <form className="mx-auto max-w-2xl" onSubmit={handleSubmit}>
        <div className="space-x-4">
          <button
            type="submit"
            className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Enviar
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-semibold text-gray-900 hover:text-gray-700 focus:outline-none"
          >
            Cancelar
          </button>
        </div>
      </form>

      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="bg-black rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold text-center">
              Mensaje enviado correctamente!
            </h3>
            <div className="flex flex-row justify-center space-x-4 mt-4">
              <button
                onClick={handleSuggestAnother}
                className="px-4 py-2 text-sm font-semibold bg-white text-indigo-600 rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Sugerir otro destino
              </button>
              <Link
                to="/travelPrueba/"
                onClick={handleViewMore}
                className="px-4 py-2 text-sm font-semibold bg-white text-indigo-600 rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Ver más destinos
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

FirebaseDataUploader.propTypes = {
  formData: PropTypes.object.isRequired,
};

export default FirebaseDataUploader;
