import React from "react";
import Wrapper from "../layout/Wrapper/Wrapper";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <p>
          By{" "}
          <a href="https://ivan-rodrigues.com" target="_blank" rel="noreferrer">
            Ivan Rodrigues
          </a>
        </p>
        <p>
          Get the source code on{" "}
          <a
            href="https://github.com/Ivanho92/react-tic-tac-toe"
            target="_blank"
            rel="noreferrer">
            Github
          </a>
        </p>
      </Wrapper>
    </footer>
  );
};

export default Footer;
