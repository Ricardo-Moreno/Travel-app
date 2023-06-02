import PropTypes from "prop-types";
import DestinationsList from "../DestinationsList/DestinationList";

const SearchResults = ({
  destinations,
  otherDestinations,
  onCloseSearch,
  onContinueSearch,
}) => {
  if (destinations.length > 0 || otherDestinations.length > 0) {
    return (
      <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold text-cutom-black">
            Destinos Encontrados
          </h2>
        </div>
        <div className="mt-4 sm:mt-6">
          <DestinationsList destinations={destinations} />
        </div>
        <div className="mt-4 sm:mt-6">
          <DestinationsList destinations={otherDestinations} />
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={onCloseSearch}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
