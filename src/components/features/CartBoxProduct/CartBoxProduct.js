import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartBoxProduct.module.scss';

class Component extends React.Component {

  render() {

    const {image, title, price} = this.props;
    
    return (
      <div className={styles.cartbox__product}>
        <img src={image} alt=''></img>
        <h4>{title}</h4>
        <p>{price}$</p>
      </div>
    );  
  }
}

Component.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.node,
};

export {
  Component as CartBoxProduct,
  Component as CartBoxProductComponent,
};
