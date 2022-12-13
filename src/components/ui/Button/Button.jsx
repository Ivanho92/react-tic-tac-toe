import React from "react";

import styles from "./Button.module.scss";

const Button = ({ label, onClick, disabled, variant, size, type }) => {
  const defaultOnClick = () => {
    console.warn("No onClick props defined!");
  };

  const btnColorVariant = variant ? styles[`btn-${variant}`] : styles[`btn-primary`];
  const btnSize = size ? styles[`btn-${size}`] : "";

  return (
    <button
      className={`${styles.btn} ${btnColorVariant} ${btnSize}`}
      onClick={onClick || defaultOnClick}
      disabled={disabled}
      type={type}>
      {label || "No label"}
    </button>
  );
};

export default Button;
