import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';
import clsx from 'clsx';
import { connect } from 'react-redux';

import {SingleOrderProduct} from '../../features/SingleOrderProduct/SingleOrderProduct';

const Component = ({className, cartProducts}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.left}>
      <form className={styles.order__form}>
        <h2>Delivery Details</h2>
        <div className={styles.content}>
          <input type='text' placeholder='name'></input>
          <input type='text' placeholder='surname'></input>
          <input type='text' placeholder='adress'></input>
          <input type='text' placeholder='adress2'></input>
          <input type='text' placeholder='zip code'></input>
          <input type='text' placeholder='city'></input>
          <input type='text' placeholder='phone'></input>
          <input type='email' placeholder='email'></input>
        </div>
        <h2>Message to the Seller</h2>
        <textarea type='text' placeholder='your message'></textarea>
      </form>
      <h2>Payment Methods</h2>
      <div className={styles.payment}>
        <div className={styles.payment__method}>
          <label> Credit Card
            <input type='checkbox'></input>
          </label>
        </div>
        <div className={styles.payment__method}>
          <label> Online Transfer
            <input type='checkbox'></input>
          </label>
        </div>
        <div className={styles.payment__method}>
          <label> Traditional Transfer
            <input type='checkbox'></input>
          </label>
        </div>
      </div> 
      <h2>Shipping</h2>
      <div className={styles.shipping}>
        <div className={styles.shipping__method}>
          <label> InPost - 5$
            <input type='checkbox'></input>
          </label>
        </div>
        <div className={styles.shipping__method}>
          <label> Courier - 7$
            <input type='checkbox'></input>
          </label>
        </div>
        <div className={styles.shipping__method}>
          <label> Post - 3$
            <input type='checkbox'></input>
          </label>
        </div>
      </div>  
    </div>
    <div className={styles.right}>
      <div className={styles.order__total}>
        {cartProducts.map(item => (
          <SingleOrderProduct key={item._id} {...item} />
        ))}
        <div className={styles.total}>
          <h1>TOTAL</h1>
          <h1>80$</h1>
        </div>
        <button>Order</button>
      </div>
    </div> 
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cartProducts: PropTypes.node,
};

const mapStateToProps = state => ({
  cartProducts: state.cart,
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as Order,
  Component as OrderComponent,
};
