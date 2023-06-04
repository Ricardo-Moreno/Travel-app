import { useEffect, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export default function AddDestinationForm() {
  const [formData, setFormData] = useState({
    availability: true,
    description: "",
    duration: "",
    imageUrl: [],
    location: "",
    name: "",
    category: "",
    price: 0,
    rating: 0,
    title: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const handleImageDrop = (imagePath) => {
    setFormData((prevData) => ({
      ...prevData,
      imageUrl: [...prevData.imageUrl, imagePath],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "imageUrl") {
      handleImageDrop(value);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const enviar = () => {
    if (
      !formData.title ||
      !formData.description ||
      !formData.duration ||
      !formData.imageUrl.length ||
      !formData.location ||
      !formData.name ||
      !formData.category ||
      !formData.price ||
      !formData.availability ||
      !formData.rating
    ) {
      console.log("Por favor, complete todos los campos obligatorios");
      return;
    }

    const data = {
      ...formData,
      imageUrl: [...formData.imageUrl],
    };

    const db = getFirestore();
    const queryDestination = collection(db, "items");
    addDoc(queryDestination, data)
      .then(() => {
        setShowSuccessMessage(true);
        setFormData({
          availability: true,
          description: "",
          duration: "",
          imageUrl: [],
          location: "",
          name: "",
          category: "",
          price: 0,
          rating: 0,
          title: "",
        });
      })
      .catch((error) => {
        console.log("Error al guardar:", error);
      });
  };

  useEffect(() => {
    if (showSuccessMessage) {
      const timeout = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [showSuccessMessage]);
  return (
    <>
      {showSuccessMessage && (
        <div className="bg-green-200 text-green-800 p-4 mb-4">
          Guardado exitosamente.
        </div>
      )}
      <form className="mx-6 max-w-2xl sm:mx-4">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="sm:col-span-6">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Título del anuncio
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="title"
                  className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 px-2"
                  value={formData.title || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full">
          <label
            htmlFor="about"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Descripcion del Destino
          </label>
          <div className="mt-2">
            <textarea
              id="about"
              name="description"
              rows={3}
              className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  px-2 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              value={formData.description || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="destination"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Ciudad
              </label>
              <div className="mt-2">
                <div className="flex rounded-sm shadow-sm ring-1 ring-inset ring-gray-300  px-2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-white sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    id="destination"
                    autoComplete="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 px-2 sm:text-sm sm:leading-6"
                    placeholder=""
                    value={formData.name || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="duration"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Duración
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="duration"
                  id="duration"
                  autoComplete="duration"
                  className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 px-2"
                  value={formData.duration || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Pais
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="location"
                  id="location"
                  autoComplete="location"
                  className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 px-2"
                  value={formData.location || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="category"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Categoría
              </label>
              <div className="mt-2">
                <select
                  name="category"
                  id="category"
                  autoComplete="category"
                  className="block w-full rounded-sm border-gray-300 py-1.5 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.category || ""}
                  onChange={handleChange}
                >
                  <option value="">Selecciona una categoría</option>
                  <option value="playa">Playa</option>
                  <option value="montaña">Montaña</option>
                  <option value="ciudad">Ciudad</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="price"
                className="block
                  text-sm font-medium leading-6 text-gray-900"
              >
                Precio
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="price"
                  id="price"
                  autoComplete="price"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 px-2"
                  value={formData.price || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="availability"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Disponibilidad
              </label>
              <div className="mt-2">
                <select
                  id="availability"
                  name="availability"
                  autoComplete="availability"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-white sm:max-w-xs sm:text-sm sm:leading-6"
                  value={formData.availability || ""}
                  onChange={handleChange}
                >
                  <option value="true">Disponible</option>
                  <option value="false">No disponible</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="rating"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Calificación
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="rating"
                  id="rating"
                  autoComplete="rating"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 px-2"
                  value={formData.rating || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 px-2"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder=" Pegar la ruta de la imagen"
        />
        <button
          type="button"
          className="bg-custom-salmon hover:bg-custom-salmon text-white font-bold py-2 px-4 rounded-sm mt-4 my-12"
          onClick={enviar}
        >
          Guardar
        </button>
      </form>
    </>
  );
}
