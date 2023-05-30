import PropTypes from "prop-types";
import DestinationFormCard from "../DestinationsFormCard/DestinationsFormCard";

const DestinationFormList = ({ destinationsForm }) => {
  return (
    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
      {destinationsForm.map((destinationForm) => (
        <div key={destinationForm.id}>
          <DestinationFormCard destinationForm={destinationForm} />
        </div>
      ))}
    </div>
  );
};

DestinationFormList.propTypes = {
  destinationsForm: PropTypes.array.isRequired,
};

export default DestinationFormList;
