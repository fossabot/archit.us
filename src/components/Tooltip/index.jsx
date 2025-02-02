import React from "react";
import PropTypes from "prop-types";

import { OverlayTrigger, Tooltip as BootstrapTooltip } from "react-bootstrap";

function Tooltip({
  text,
  children,
  modifiers,
  popperConfig,
  left = false,
  right = false,
  top = false,
  bottom = false
}) {
  return (
    <OverlayTrigger
      placement={top ? "top" : bottom ? "bottom" : left ? "left" : "right"}
      popperConfig={{
        modifiers: {
          preventOverflow: {
            enabled: true,
            boundariesElement: "window"
          },
          ...modifiers
        },
        ...popperConfig
      }}
      overlay={<BootstrapTooltip>{text}</BootstrapTooltip>}
    >
      {children}
    </OverlayTrigger>
  );
}

export default Tooltip;

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  popperConfig: PropTypes.object,
  modifiers: PropTypes.object,
  left: PropTypes.bool,
  right: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool
};
