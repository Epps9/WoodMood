import React from 'react';
import PropTypes from 'prop-types';
import {Footer} from '../../features/Footer/Footer';
//import {Navbar} from '../Navbar/Navbar';
import {Link} from 'react-router-dom';
import {GiLindenLeaf} from "react-icons/gi";
import {FaShoppingCart} from 'react-icons/fa'


import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MainLayout.module.scss';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      hover: false,
    }
  }
  
    handleMouseHover() {
      this.setState(this.toggleHoverState);
    }
  
    toggleHoverState() {
      return {
        hover: !this.state.hover,
      }
    }


  render() {

    const {children, className, cartCount} = this.props;

    return (
      <div className={clsx(className, styles.root)}>

        <div className={styles.top__bar}>
          <div className={styles.top__bar__content}>
            <Link to='/' className={styles.link}>
              <div className={styles.logo}>
                <GiLindenLeaf className={styles.leaf} />      
                <h1>Wood Mood</h1>
              </div>
            </Link>
            <div className={styles.side__options}>
              <Link to='/'>Register</Link>
              <Link to='/'> Log in</Link>
              <div className={styles.cart}>
                <FaShoppingCart/>
                <Link to='/cart' className={styles.cartCart} onMouseEnter={this.handleMouseHover}>Cart</Link>
                <p>{cartCount}</p>
              </div>
            </div>
          </div>
          <div className={styles.nav}>
            <Link to='/watches' className={styles.nav__link}>watches</Link>
            <Link to='/bracelets' className={styles.nav__link}>bracelets</Link>
            <Link to='/other' className={styles.nav__link}>other</Link>
          </div>
        </div>
        <div className={styles.layout__background}>
        {this.state.hover && 
        
          <div className={styles.cartbox} onMouseLeave={this.handleMouseHover}>
            <div className={styles.cartbox__product}>
            <img src='https://ae01.alicdn.com/kf/Had8ad938c5184d3d99aa79529c471a7eA.jpg'></img>
            <h4>your watch</h4>
            <p>20$</p>
            </div>
            <div className={styles.cartbox__product}>
              <img src='https://ae01.alicdn.com/kf/Had8ad938c5184d3d99aa79529c471a7eA.jpg'></img>
              <h4>your watch</h4>
              <p>20$</p>
            </div>
          <Link to='/cart' className={styles.cartlink}>See cart</Link>
          </div>

        }
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

const mapStateToProps = state => ({
  cartCount: state.cartCount,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as MainLayout,
  Container as MainLayout,
  Component as MainLayoutComponent,
};
