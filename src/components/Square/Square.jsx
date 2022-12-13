import React from "react";

import styles from "./Square.module.scss";

const Field = ({ id, value, onClick }) => {
  const squareClickHandler = (e) => {
    e.target.blur();

    onClick(e.target.id);
  };

  return (
    <button id={id} className={styles.square} onClick={squareClickHandler}>
      {value}
    </button>
  );
};

export default Field;
