import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleMap, Marker } from "@react-google-maps/api";

const GoogleMapsButton = ({ location }) => {
  const mapContainerStyle = {
    width: "100%",
    height: "300px",
  };

  const [center, setCenter] = useState(null);

  useEffect(() => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: location }, (results, status) => {
      if (status === "OK" && results.length > 0) {
        const { lat, lng } = results[0].geometry.location;
        setCenter({ lat: lat(), lng: lng() });
      } else {
        return "Error geocoding location:", status;
      }
    });
  }, [location]);

  if (!center) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
      <Marker position={center} />
    </GoogleMap>
  );
};

GoogleMapsButton.propTypes = {
  location: PropTypes.string.isRequired,
};

export default GoogleMapsButton;
