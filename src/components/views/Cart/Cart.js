import React from 'react';
import PropTypes from 'prop-types';
import {AddButton} from '../../features/AddButton/AddButton';
import {Link} from 'react-router-dom';
import {FaTrashAlt} from 'react-icons/fa';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Cart.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.left}>
        <h2>Twój koszyk</h2>
        <div className={styles.singleProduct}>
          <img/>
          <div className={styles.centreElements}>
            <h3>Jeasny</h3>
            <AddButton/>
          </div>
          <div className={styles.endElements}>
            <div><FaTrashAlt/></div>
            <p>price</p>
          </div>
        </div>
        <div className={styles.singleProduct}>
          <img/>
          <div className={styles.centreElements}>
            <h3>Jeasny</h3>
            <AddButton/>
          </div>
          <div className={styles.endElements}>
            <div><FaTrashAlt/></div>
            <p>price</p>
          </div>
        </div>
    </div>
    <div className={styles.right}>
      <div className={styles.priceElement}>
        <h3>products price</h3>
        <h3>50$</h3>
      </div>
      <div className={styles.priceElement}>
        <h3>shipping price</h3>
        <h3>10$</h3>
      </div>
      <div className={styles.priceElement}>
        <h2>total price</h2>
        <h2>40$</h2>
      </div>
      <Link to='/order' className={styles.checkout}>Checkout</Link>
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
  Component as Cart,
  // Container as Cart,
  Component as CartComponent,
};
