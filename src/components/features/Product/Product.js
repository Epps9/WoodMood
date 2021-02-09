import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Product.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.product}>
      <img src='https://tmzegarki.pl/wp-content/uploads/2018/11/2520-45aa2b-510x510.jpeg'></img>
      <h3 className={styles.title}>title title title</h3>
      <div className={styles.bottomBar}>
        <h3>price</h3>
        <button>Add to cart</button>
      </div>
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
  Component as Product,
  // Container as Product,
  Component as ProductComponent,
};
