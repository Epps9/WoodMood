import React from 'react';
import PropTypes from 'prop-types';
import {Bracelet} from '../../features/Bracelet/Bracelet';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Bracelets.module.scss';

const Component = ({className, bracelets}) => (
  <div className={clsx(className, styles.root)}>
    {bracelets.map( item => (
      <Bracelet key={item._id} {...item}/>
    ))}
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  bracelets: PropTypes.node,
};

const mapStateToProps = state => ({
  bracelets: state.bracelets,
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
