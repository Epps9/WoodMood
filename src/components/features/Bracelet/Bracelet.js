import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Bracelet.module.scss';

const Component = ({className, image, title, price, id}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.product}>
      <Link to={`/bracelets/${id}`} className={styles.link}>
        <img src={image}></img>
        <h3 className={styles.title}>{title}</h3>
      </Link>
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
  Component as Bracelet,
  // Container as Product,
  Component as BraceletComponent,
};
