import React from 'react';
import PropTypes from 'prop-types';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CartBoxProduct.module.scss';

class Component extends React.Component {

  render() {

    const {image, title, price} = this.props;
    
    return (
        <div className={styles.cartbox__product}>
          <img src={image}></img>
          <h4>{title}</h4>
          <p>{price}$</p>
        </div>
    );  
  }
}

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
  Component as CartBoxProduct,
  // Container as CartBoxProduct,
  Component as CartBoxProductComponent,
};
