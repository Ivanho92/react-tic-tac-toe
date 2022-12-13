import React from "react";

import styles from "./Cluster.module.scss";

const Cluster = ({ children, gap }) => {
  const clusterGap = gap ? styles[`cluster-${gap}`] : "";

  return <div className={`${styles.cluster} ${clusterGap}`}>{children}</div>;
};

export default Cluster;
