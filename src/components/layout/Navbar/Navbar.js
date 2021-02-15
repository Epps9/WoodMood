import React from 'react';
import PropTypes from 'prop-types';
import {GiLindenLeaf} from "react-icons/gi";
import { Link } from 'react-router-dom';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Navbar.module.scss';

const Component = () => (
  <div className={styles.topBar}>
    <div className={styles.topBarContent}>
      <Link to='/' className={styles.link}>
        <div className={styles.logo}>
          <GiLindenLeaf className={styles.leaf} />      
          <h1>Wood Mood</h1>
        </div>
      </Link>
      <div className={styles.sideOptions}>
        <Link to='/'>Register</Link>
        <Link to='/'> Log in</Link>
        <Link to='/cart' className={styles.cartCart}>Cart</Link>
      </div>
    </div>
    <div className={styles.navBar}>
      <Link to='/watches' className={styles.navBarLink}>watches</Link>
      <Link to='/bracelets' className={styles.navBarLink}>bracelets</Link>
      <Link to='/other' className={styles.navBarLink}>other</Link>
    </div>

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
  Component as Navbar,
  // Container as Navbar,
  Component as NavbarComponent,
};
