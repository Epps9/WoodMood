import React from 'react';
import PropTypes from 'prop-types';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CartBox.module.scss';

const Component = () => (
  <div className={styles.cartBox}>
      <div className={styles.productBox}>
        <img src='https://ae01.alicdn.com/kf/Had8ad938c5184d3d99aa79529c471a7eA.jpg'></img>
        <h4>your watch</h4>
        <p>20$</p>
      </div>
      <div className={styles.productBox}>
        <img src='https://ae01.alicdn.com/kf/Had8ad938c5184d3d99aa79529c471a7eA.jpg'></img>
        <h4>your watch</h4>
        <p>20$</p>
      </div>
      <button>See cart</button>
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
  Component as CartBox,
  // Container as CartBox,
  Component as CartBoxComponent,
};
