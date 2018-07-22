import React from "react";
import { node } from "prop-types";

const Content = ({ children }) => (
  <section id="main">{children}</section>
  );

Content.propTypes = {
  children: node.isRequired
}

export default Content;
