import PropTypes from "prop-types";
import DestinationsList from "../DestinationsList/DestinationList";

const SearchResults = ({
  destinations,
  otherDestinations,
  onCloseSearch,
  onContinueSearch,
}) => {
  if (destinations.length > 0 || otherDestinations.length > 0) {
    const destination = [...destinations, ...otherDestinations];

    return (
      <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16">
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold text-custom-salmon">
            Destinos Encontrados
          </h2>
        </div>
        <div className="flex mt-4 sm:mt-6">
          <DestinationsList destinations={destination} />
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={onCloseSearch}
            className="bg-white hover:bg-custom-salmon hover:text-white text-custom-salmon font-bold py-2 px-4 rounded-sm border-2 border-custom-salmon"
          >
            Ver más destinos
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16">
        <div className="flex justify-center">
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">
              No hemos encontrado resultados con esa búsqueda.
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={onContinueSearch}
            className="bg-white hover:bg-custom-salmon hover:text-white text-custom-salmon font-bold py-2 px-4 rounded-sm border-2 border-custom-salmon"
          >
            Seguir buscando
          </button>
        </div>
      </div>
    );
  }
};

SearchResults.propTypes = {
  destinations: PropTypes.array.isRequired,
  otherDestinations: PropTypes.array.isRequired,
  onCloseSearch: PropTypes.func.isRequired,
  onContinueSearch: PropTypes.func.isRequired,
};

export default SearchResults;
