import PropTypes from "prop-types";

const DestinationDetail = ({ destination }) => {
  return (
    <div className="group relative">
      <img
        src={destination.imageUrl}
        className="h-56 w-40 object-cover object-center cursor-pointer"
      />
      <h3 className="mt-6 text-sm text-gray-500">
        <span className="absolute inset-0" />
        {destination.title}
      </h3>
      <p className="text-base font-semibold text-gray-900">
        {destination.description}
      </p>
    </div>
  );
};

DestinationDetail.propTypes = {
  destination: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default DestinationDetail;
