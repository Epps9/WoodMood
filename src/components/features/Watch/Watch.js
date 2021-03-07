import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { addWatchToCart } from '../../../redux/productsRedux.js';

import styles from './Watch.module.scss';

const Component = ({className, image, title, price, _id, addToCart}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.product}>
      <Link to={`/watches/${_id}`} className={styles.link}>
        <img src={image}></img>
        <h3 className={styles.title}>{title}</h3>
      </Link>
      <div className={styles.bottomBar}>
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
};

// const mapStateToProps = state => ({
//   watches: state.products.watches,
// });

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data) => dispatch(addWatchToCart(data)),
}); 


const Container = connect(null, mapDispatchToProps)(Component);

export {
  //Component as Watch,
  Container as Watch,
  Component as WatchComponent,
};
