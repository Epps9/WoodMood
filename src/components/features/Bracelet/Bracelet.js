import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { addBraceletToCart } from '../../../redux/productsRedux.js';

import clsx from 'clsx';

import { connect } from 'react-redux';

import styles from './Bracelet.module.scss';

const Component = ({className, image, title, price, _id, addToCart}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.product}>
      <Link to={`/bracelets/${_id}`} className={styles.link}>
        <img src={image} alt=''></img>
        <h3 className={styles.title}>{title}</h3>
      </Link>
      <div className={styles.bottom__bar}>
        <h3>{price}$</h3>
        <Link to="/cart"><button onClick={() => 
          addToCart({_id: _id, amount: 1})}>Add to cart</button></Link>
      </div>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  _id: PropTypes.node,
  addToCart: PropTypes.node,
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data) => dispatch(addBraceletToCart(data)),
}); 

const Container = connect(null, mapDispatchToProps)(Component);

export {
  Container as Bracelet,
  Component as BraceletComponent,
};
