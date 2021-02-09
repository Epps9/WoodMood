import React from 'react';
import PropTypes from 'prop-types';
import {GiLindenLeaf} from "react-icons/gi";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Navbar.module.scss';

const Component = () => (
  <div className={styles.topBar}>
    <div className={styles.topBarContent}>
      <div className={styles.logo}>
        <GiLindenLeaf className={styles.leaf} />      
        <h1>Wood Mood</h1>
      </div>
      <div className={styles.sideOptions}>
        <a href="#">Register</a>
        <a href="#">Log in</a>
        <a href="#" className={styles.cart}>Cart</a>
      </div>
    </div>
    <div className={styles.navBar}>
      <a className={styles.navBarLink}>watches</a>
      <a className={styles.navBarLink}>bracelets</a>
      <a className={styles.navBarLink}>other</a>
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
  Component as Navbar,
  // Container as Navbar,
  Component as NavbarComponent,
};
