import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getOneWatch, addProductToCart } from '../../../redux/productsRedux.js';

import styles from './WatchView.module.scss';

class Component extends React.Component
{
  


  render() {

    const {title, image, description, price, addToCart} = this.props.watch[0];
  
    return (
      <div className={styles.root}>
        <img src={image}></img>
        <div className={styles.contentWrapper}>
          <h2>{title}</h2>
          <h1>{price}</h1>
          <p>{description}</p>
          <div className={styles.amount}>
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
          <button onClick={addToCart}>Add to cart</button>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  watch: PropTypes.node,
};

const mapStateToProps = (state, props) => ({
  watch: getOneWatch(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
   addToCart: dispatch(addProductToCart({id: '3'})),
 }); 

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as ProductView,
  Container as WatchView,
  Component as WatchViewComponent,
};
