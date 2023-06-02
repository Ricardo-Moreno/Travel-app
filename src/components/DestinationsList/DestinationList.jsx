import PropTypes from "prop-types";
import DestinationCard from "../DestinationCard/DestinationCard";
import DestinationFormCard from "../DestinationsFormCard/DestinationsFormCard";

const DestinationsList = ({ destinations }) => {
  return (
    <div className="mt-1 space-y-0 lg:grid lg:grid-cols-5 lg:space-y-0">
      {destinations.map((item) => (
        <div key={item.id}>
          {item.type === "destination" ? (
            <DestinationCard destination={item} />
          ) : (
            <DestinationFormCard destinationForm={item} />
          )}
        </div>
      ))}
    </div>
  );
};

DestinationsList.propTypes = {
  destinations: PropTypes.array.isRequired,
};

export default DestinationsList;
