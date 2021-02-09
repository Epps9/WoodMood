import React from 'react';
import PropTypes from 'prop-types';
import {PromoProduct} from '../../features/PromoProduct/PromoProduct';
import {Footer} from '../../features/Footer/Footer';
import {Navbar} from '../Navbar/Navbar';
import {CartBox} from '../../features/CartBox/CartBox';


import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MainLayout.module.scss';

class Component extends React.Component {


  render() {

    const {children, className} = this.props;

    return (
      <div className={clsx(className, styles.root)}>
        <Navbar/>
        <div className={styles.layoutBackground}>
        <CartBox/>
        {children}
        </div>
        <Footer/>
      </div>
    )
  }
};

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
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
