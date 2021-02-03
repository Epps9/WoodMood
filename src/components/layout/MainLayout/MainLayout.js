import React from 'react';
import PropTypes from 'prop-types';
import {GiLindenLeaf} from "react-icons/gi";

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MainLayout.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.topBar}>
      <button >MENU</button>
      <div className={styles.logo}>
        <GiLindenLeaf className={styles.leaf} />      
        <h1>Wood Mood</h1>
      </div>
      <div className={styles.sideOptions}>
        <a href="#">Register</a>
        <a href="#">Log in</a>
        <a href="#">Cart</a>
      </div>
    </div>
    <div className={styles.menu}>
      <a href="#">PRODUCTS</a>
      <a href="#">watches</a>
      <a href="#">bracelets</a>
      <a href="#">other</a>
    </div>
    
    {children}
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
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
