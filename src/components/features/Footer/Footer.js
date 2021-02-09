import React from 'react';
import PropTypes from 'prop-types';
import {FaFacebookSquare, FaInstagram, FaLinkedin} from "react-icons/fa"


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';

const Component = () => (
    <div className={styles.footer}>
      <div className={styles.info}>
        <a>About us</a>
        <a>Delivery</a>
        <a>Contact</a>
      </div>
      <div className={styles.socialMedia}>
        <a><FaFacebookSquare className={styles.socialMediaIcon}/></a>
        <a><FaInstagram className={styles.socialMediaIcon}/></a>
        <a><FaLinkedin className={styles.socialMediaIcon}/></a>
      </div>
    </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};
