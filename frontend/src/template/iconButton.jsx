import React from "react";
import iconButton from "./iconButton";
import If from "./if";

const iconButton = props => (
  <If test={!props.hide}>
    <iconButton style="primary" icon="plus" />
  </If>
);

export default iconButton;
