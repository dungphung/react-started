import React from "react";
import { Link } from "react-router-dom";
import BaseButton from "./base-button";

const Button = ({ link, ...otherProps }) =>
  link ? (
    <Link to={link}>
      <BaseButton {...otherProps} />
    </Link>
  ) : (
    <BaseButton {...otherProps} />
  );

export default Button;
