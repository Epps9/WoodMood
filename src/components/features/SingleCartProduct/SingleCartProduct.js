import React from 'react';
import PropTypes from 'prop-types';
import {FaTrashAlt} from 'react-icons/fa';

import { connect } from 'react-redux';
import { removeProduct, findProductAmount, changeProductAmount } from '../../../redux/productsRedux.js';

import styles from './SingleCartProduct.module.scss';

class Component extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
    }

    this.handleSelectChange = this.handleSelectChange.bind(this);


}

  changeAmount = (data) => {
    console.log('co to data', data);
  
  return data;
  }
  

  handleSelectChange(event) {
    this.setState({amount: event.target.value});
    console.log('new amount',this.state.amount);
    console.log('event target value ', event.target.value) 
  }
  
  render () {


    const {title, image, price, removeFromCart, amount} = this.props;
    return (

    <div className={styles.singleProduct}>
      <img src={image}/>
      <div className={styles.centre__elements}>
        <h3>{title}</h3>
        <select id='select_id' value={amount} onChange={ (event) => { this.handleSelectChange(event); this.props.changeAmount({id: this.props.id, amount: this.state.amount}) }}>
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

const mapDispatchToProps = (dispatch) => {

return ({
  removeFromCart: (id) => dispatch(removeProduct(id)),
  changeAmount: (data) => dispatch(changeProductAmount(data))
})};

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as SingleCartProduct,
  Container as SingleCartProduct,
  Component as SingleCartProductComponent,
};
