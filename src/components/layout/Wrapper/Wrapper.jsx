import React from "react";
import styles from "./Wrapper.module.scss";

const Wrapper = ({ children, className }) => {
  return <div className={`${styles.wrapper} ${className}`}>{children}</div>;
};

export default Wrapper;
