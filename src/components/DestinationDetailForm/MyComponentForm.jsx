import React from "react";
import PropTypes from "prop-types";

const MyComponentForm = React.forwardRef(({ children }, ref) => {
  return <div ref={ref}>{children}</div>;
});

MyComponentForm.displayName = "MyComponentForm";

MyComponentForm.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyComponentForm;
