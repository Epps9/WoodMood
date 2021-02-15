import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Order.module.scss';

const Component = ({className, children}) => (
<div className={clsx(className, styles.root)}>
    <div className={styles.left}>
        <form className={styles.orderForm}>
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
          <div className={styles.paymentMethod}>
              <label> Credit Card
                <input type='checkbox'></input>
              </label>
          </div>
          <div className={styles.paymentMethod}>
              <label> Online Transfer
                <input type='checkbox'></input>
              </label>
            </div>
            <div className={styles.paymentMethod}>
              <label> Traditional Transfer
                <input type='checkbox'></input>
              </label>
            </div>
        </div> 
        <h2>Shipping</h2>
        <div className={styles.ShippingMethod}>
              <label> InPost - 5$
                <input type='checkbox'></input>
              </label>
          </div>
          <div className={styles.paymentMethod}>
              <label> Courier - 7$
                <input type='checkbox'></input>
              </label>
            </div>
            <div className={styles.paymentMethod}>
              <label> Post - 3$
                <input type='checkbox'></input>
              </label>
            </div>
     </div>
    <div className={styles.right}>
      <div className={styles.orderSumUp}>
        <div className={styles.product}>
          <img/>
          <p>watch</p>
          <p>50$</p>
        </div>
        <div className={styles.product}>
          <img/>
          <p>watch</p>
          <p>50$</p>
        </div>
        <button>Order</button>
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
  Component as Order,
  // Container as Order,
  Component as OrderComponent,
};
