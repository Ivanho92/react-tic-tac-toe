import React from "react";

import Wrapper from "../utils/Wrapper/Wrapper";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <p>
          By{" "}
          <a href="https://ivan-rodrigues.com" target="_blank">
            Ivan Rodrigues
          </a>
        </p>
        <p>
          Get the source code on{" "}
          <a href="https://ivan-rodrigues.com" target="_blank">
            Github
          </a>
        </p>
      </Wrapper>
    </footer>
  );
};

export default Footer;
