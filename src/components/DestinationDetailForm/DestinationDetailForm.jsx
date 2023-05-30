import PropTypes from "prop-types";

const DestinationDetailForm = ({ destinationForm }) => {
  return (
    <div className="group relative">
      <img
        src={destinationForm.imageUrl}
        className="h-56 w-40 object-cover object-center cursor-pointer"
      />
      <h3 className="mt-6 text-sm text-gray-500">
        <span className="absolute inset-0" />
        {destinationForm.title}
      </h3>
      <p className="text-base font-semibold text-gray-900">
        {destinationForm.description}
      </p>
    </div>
  );
};

DestinationDetailForm.propTypes = {
  destinationForm: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default DestinationDetailForm;
