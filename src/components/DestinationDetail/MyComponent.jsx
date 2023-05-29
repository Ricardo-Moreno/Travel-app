import React from "react";
import PropTypes from "prop-types";

const MyComponent = React.forwardRef(({ children }, ref) => {
  return <div ref={ref}>{children}</div>;
});

MyComponent.displayName = "MyComponent";

MyComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyComponent;
