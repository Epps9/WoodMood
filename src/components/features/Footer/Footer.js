import React from 'react';
import PropTypes from 'prop-types';
import {FaFacebookSquare, FaInstagram, FaLinkedin} from "react-icons/fa";

import styles from './Footer.module.scss';

const Component = () => (
  <div className={styles.footer}>
    <div className={styles.info}>
      <a href=''>About us</a>
      <a href=''>Delivery</a>
      <a href=''>Contact</a>
    </div>
    <div className={styles.social__media}>
      <a href='facebook.com'><FaFacebookSquare className={styles.social__media__icon}/></a>
      <a href='instagram.com'><FaInstagram className={styles.social__media__icon}/></a>
      <a href='linkedin.com'><FaLinkedin className={styles.social__media__icon}/></a>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Footer,
  Component as FooterComponent,
};
