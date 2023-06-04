import PropTypes from "prop-types";
import DestinationCard from "../DestinationCard/DestinationCard";

const DestinationsList = ({ destinations }) => {
  return (
    <div className="mt-1 space-y-0 lg:grid lg:grid-cols-5 lg:space-y-0">
      {destinations.map((item) => (
        <div key={item.id}>
          <DestinationCard destination={item} />
        </div>
      ))}
    </div>
  );
};

DestinationsList.propTypes = {
  destinations: PropTypes.array.isRequired,
};

export default DestinationsList;
