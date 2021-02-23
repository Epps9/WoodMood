import React from 'react';
import PropTypes from 'prop-types';
import {FaTrashAlt} from 'react-icons/fa';

import { connect } from 'react-redux';
import { removeProduct } from '../../../redux/productsRedux.js';

import styles from './SingleCartProduct.module.scss';

class Component extends React.Component { 
  
  
  render () {

    const {title, image, price, removeFromCart} = this.props;
    return (

    <div className={styles.singleProduct}>
      <img src={image}/>
      <div className={styles.centre__elements}>
        <h3>{title}</h3>
        <select>
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
        <button onClick={removeFromCart}><FaTrashAlt/></button>
        <p>{price}</p>
      </div>
    </div>

    )
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

//const mapStateToProps = state => ({
  //removeFromCart: id => removeProduct(id),
//});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: dispatch(removeProduct()),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  //Component as SingleCartProduct,
  Container as SingleCartProduct,
  Component as SingleCartProductComponent,
};
