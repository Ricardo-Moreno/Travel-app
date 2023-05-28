// DestinationsList.js
import PropTypes from "prop-types";
import DestinationCard from "../DestinationCard/DestinationCard";

const DestinationsList = ({ destinations }) => {
  return (
    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
      {destinations.map((destination) => (
        <div key={destination.id}>
          <DestinationCard destination={destination} />
        </div>
      ))}
    </div>
  );
};

DestinationsList.propTypes = {
  destinations: PropTypes.array.isRequired,
};

export default DestinationsList;
