import React from "react";

import Wrapper from "../utils/Wrapper/Wrapper";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <h1>React TicTacToe</h1>
      </Wrapper>
    </header>
  );
};

export default Header;
