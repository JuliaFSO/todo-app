import React from "react";
import iconButton from "./iconButton";

const iconButton = props => {
  if(props.hide) {
    return null;
  } else {
    return (
      <iconButton style="primary" icon="plus" />
    );
  }
};

export default iconButton;
