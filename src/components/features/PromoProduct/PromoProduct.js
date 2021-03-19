import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import styles from './PromoProduct.module.scss';

const Component = ({className, image, price, newPrice, _id}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.product}>
      <img src={image} alt=''></img>
      <Link to={`/promo/${_id}`}><button>check out</button></Link>
      <h3>{price}$</h3>
      <h2>{newPrice}$</h2>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  newPrice: PropTypes.string,
  _id: PropTypes.number,
};

export {
  Component as PromoProduct,
  Component as PromoProductComponent,
};
