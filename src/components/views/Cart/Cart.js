import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import { SingleCartProduct} from '../../features/SingleCartProduct/SingleCartProduct';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Cart.module.scss';

const getProductsPrice = (products) => {

  let productsPrice =  0;

  products.forEach(element => {
    productsPrice += Number(element.price) * Number(element.amount)
  });

  return productsPrice;
}

const getTotalPrice = (products) => {
  let totalPrice =  0;

  products.forEach(element => {
    totalPrice += (Number(element.price) * Number(element.amount)) + 10;
  });
  return totalPrice;
}

const Component = ({cartProducts, className}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.left}>
        <h2>Twój koszyk</h2>
        {cartProducts.map(item => (
          <SingleCartProduct key={item.id} {...item} />
        ))}
    </div>
    <div className={styles.right}>
      <div className={styles.price__element}>
        <h3>products price</h3>
        <h3>{getProductsPrice(cartProducts)}$</h3>
      </div>
      <div className={styles.price__element}>
        <h3>shipping price</h3>
        <h3>10$</h3>
      </div>
      <div className={styles.price__element}>
        <h2>total price</h2>
        <h2>{getTotalPrice(cartProducts)}$</h2>
      </div>
      <Link to='/order' className={styles.checkout}>Checkout</Link>
    </div> 
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  cartProducts: state.cart,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
