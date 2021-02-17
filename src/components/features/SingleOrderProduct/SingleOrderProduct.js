import React from 'react';
import PropTypes from 'prop-types';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './SingleOrderProduct.module.scss';

const Component = ({image, title, price}) => (
  <div className={styles.product}>
    <img src={image}/>
    <p>{title}</p>
    <h3>{price}</h3>
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
  Component as SingleOrderProduct,
  // Container as SingleOrderProduct,
  Component as SingleOrderProductComponent,
};
