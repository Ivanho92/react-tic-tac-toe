import React from "react";

import styles from "./Stack.module.scss";

const Stack = ({ children, gap }) => {
  const stackGap = gap ? styles[`stack-${gap}`] : "";

  return <div className={`${styles.stack} ${stackGap}`}>{children}</div>;
};

export default Stack;
