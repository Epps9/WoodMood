import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getOneBracelet, addBraceletToCart } from '../../../redux/productsRedux.js';

import styles from './BraceletView.module.scss';

class Component extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      amount: '1',
    }

    this.handleSelectChange = this.handleSelectChange.bind(this);
}

  handleSelectChange(event) {
    this.setState({amount: event.target.value});
  }
  


  render() {

    const {title, image, description, price} = this.props.bracelet[0];
  
    return (
      <div className={styles.root}>
        <img src={image}></img>
        <div className={styles.content__wrapper}>
          <h2>{title}</h2>
          <h1>{price}</h1>
          <p>{description}</p>
          <div className={styles.amount}>
            <select value={this.state.amount} onChange={this.handleSelectChange}>
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
          <Link to="/cart"><button onClick={() => 
            this.props.addToCart({id: this.props.match.params.id, amount: this.state.amount})}>Add to cart</button></Link>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  bracelet: PropTypes.node,
};

const mapStateToProps = (state, props) => ({
  bracelet: getOneBracelet(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data) => dispatch(addBraceletToCart(data)),
}); 

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as ProductView,
  Container as BraceletView,
  Component as BraceletViewComponent,
};
