import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Cart.module.scss';
import { connect } from 'react-redux';

import { SingleCartProduct} from '../../features/SingleCartProduct/SingleCartProduct';


const getProductsPrice = (products) => {

  let productsPrice =  0;

  products.forEach(element => {
    productsPrice += Number(element.price) * Number(element.amount);
  });

  return productsPrice;
};

const getTotalPrice = (products) => {
  let totalPrice =  0;

  products.forEach(element => {
    totalPrice += (Number(element.price) * Number(element.amount));
  });
  totalPrice += 10;
  
  return totalPrice;
};


class Component extends React.Component {

  render() {

    const {cartProducts, className} = this.props;

    return (
      <div className={clsx(className, styles.root)}>
        <div className={styles.left}>
          <h2>Twój koszyk</h2>
          {cartProducts.map(item => (
            <SingleCartProduct key={item._id} {...item}/>
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
  }
}

Component.propTypes = {
  cartProducts: PropTypes.node,
  className: PropTypes.node,
};

const mapStateToProps = state => ({
  cartProducts: state.cart,
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as Cart,
  Component as CartComponent,
};
