import React from 'react';
import PropTypes from 'prop-types';
import styles from './SingleOrderProduct.module.scss';

const Component = ({image, title, price}) => (
  <div className={styles.product}>
    <img src={image} alt=''/>
    <p>{title}</p>
    <h3>{price}$</h3>
  </div>
);

Component.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as SingleOrderProduct,
  Component as SingleOrderProductComponent,
};
