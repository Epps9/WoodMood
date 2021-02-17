import React from 'react';
import PropTypes from 'prop-types';
import {FaTrashAlt} from 'react-icons/fa';
import {AddButton} from '../../features/AddButton/AddButton';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './SingleCartProduct.module.scss';

const Component = ({title, image, price}) => (
  <div className={styles.singleProduct}>
  <img src={image}/>
  <div className={styles.centreElements}>
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
      <option>9</option>
    </select>
  </div>
  <div className={styles.endElements}>
    <div><FaTrashAlt/></div>
    <p>{price}</p>
  </div>
</div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   cartProduct: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as SingleCartProduct,
  // Container as SingleCartProduct,
  Component as SingleCartProductComponent,
};
