import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Product.module.scss';

const Component = ({className, image, title, price}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.product}>
      <img src={image}></img>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.bottomBar}>
        <h3>{price}</h3>
        <button>Add to cart</button>
      </div>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
};

// const mapStateToProps = state => ({
//   watches: state.products.watches,
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
