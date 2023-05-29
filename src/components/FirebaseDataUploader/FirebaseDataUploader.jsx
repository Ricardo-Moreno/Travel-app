import { getFirestore, collection, addDoc } from "firebase/firestore";
import PropTypes from "prop-types";
import { firebaseConnection } from "../../fireBase/configFireBase"; // Importa la función firebaseConnection desde tu archivo de configuración

const FirebaseDataUploader = ({ formData }) => {
  const saveDataToFirebase = async (data) => {
    try {
      const app = firebaseConnection(); // Obtén la instancia de la aplicación de Firebase
      const db = getFirestore(app);
      const docRef = await addDoc(collection(db, "destinations"), data);
      console.log("Documento guardado con ID:", docRef.id);
    } catch (error) {
      console.error("Error al guardar el documento:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveDataToFirebase(formData);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <form className="mx-auto max-w-2xl" onSubmit={handleSubmit}>
        {/* Resto del formulario */}
      </form>

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
    </div>
  );
};
FirebaseDataUploader.propTypes = {
  formData: PropTypes.object.isRequired,
};

export default FirebaseDataUploader;
