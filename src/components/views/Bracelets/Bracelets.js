import React from 'react';
import PropTypes from 'prop-types';
import {Product} from '../../features/Product/Product';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Bracelets.module.scss';

const Component = ({className, bracelets}) => (
  <div className={clsx(className, styles.root)}>
    {bracelets.map( item => (
      <Product key={item.id} {...item}/>
    ))}

  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  bracelets: PropTypes.node,
};

const mapStateToProps = state => ({
  bracelets: state.products.bracelets,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Bracelets,
  Container as Bracelets,
  Component as BraceletsComponent,
};
