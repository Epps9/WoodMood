import React from 'react';
import PropTypes from 'prop-types';
import {Product} from '../../features/Product/Product'

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Watches.module.scss';

const Component = ({className, watches}) => (
  <div className={clsx(className, styles.root)}>
    {watches.map( item => (
      <Product key={item.id} {...item}/>
    ))}

  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  watches: PropTypes.node,
};

const mapStateToProps = state => ({
  watches: state.products.watches,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Watches,
  Container as Watches,
  Component as WatchesComponent,
};
