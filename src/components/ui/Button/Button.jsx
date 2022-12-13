import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  label,
  onClick,
  disabled,
  variant,
  size,
  type,
  focusOnRender,
}) => {
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
      type={type}
      autoFocus={focusOnRender}>
      {label || "No label"}
    </button>
  );
};
export default Button;
