import React from 'react';
import PropTypes from 'prop-types';
import {FaTrashAlt} from 'react-icons/fa';

import { connect } from 'react-redux';
import { removeProduct, findProductAmount } from '../../../redux/productsRedux.js';

import styles from './SingleCartProduct.module.scss';

class Component extends React.Component { 
  
  
  render () {

    const {title, image, price, removeFromCart, amount} = this.props;
    return (

    <div className={styles.singleProduct}>
      <img src={image}/>
      <div className={styles.centre__elements}>
        <h3>{title}</h3>
        <select value={amount}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
      <div className={styles.end__elements}>
        <button onClick={() => removeFromCart(this.props.id)}><FaTrashAlt/></button>
        <p>{price}$</p>
      </div>
    </div>

    )
  }
}


const mapStateToProps = (state, props) => {  
  return ({
    amount: findProductAmount(state, props.id),
})};

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (id) => dispatch(removeProduct(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as SingleCartProduct,
  Container as SingleCartProduct,
  Component as SingleCartProductComponent,
};
