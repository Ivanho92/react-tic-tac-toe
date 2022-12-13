import React from "react";

import styles from "./Square.module.scss";

const Field = ({ id, value }) => {
  return (
    <button id={id} className={styles.square}>
      {value}
    </button>
  );
};

export default Field;
