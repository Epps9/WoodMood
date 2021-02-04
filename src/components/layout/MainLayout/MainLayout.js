import React from 'react';
import PropTypes from 'prop-types';
import {GiLindenLeaf} from "react-icons/gi";
import {FaFacebookSquare, FaInstagram, FaLinkedin} from "react-icons/fa"

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MainLayout.module.scss';

class Component extends React.Component {

  constructor() {
    super ()
    this.state = {
      showMe: true,
    }
  }

  toggleMenu(){
    this.setState({
      showMe: !this.state.showMe
    })
  }


  render() {

    const {children, className} = this.props;

    return (
      <div className={clsx(className, styles.root)}>
        <div className={styles.topBar}>
          <button className={styles.menuButton} onClick={() => this.toggleMenu()}>MENU</button>
          <div className={styles.logo}>
            <GiLindenLeaf className={styles.leaf} />      
            <h1>Wood Mood</h1>
          </div>
          <div className={styles.sideOptions}>
            <a href="#">Register</a>
            <a href="#">Log in</a>
            <a href="#">Cart</a>
          </div>
        </div>
        
          {this.state.showMe?
          <div className={styles.menu}>
            <a href="#">PRODUCTS</a>
            <a href="#">watches</a>
            <a href="#">bracelets</a>
            <a href="#">other</a>
          </div>
          :null
          }
        <div className={styles.footer}>
          <div className={styles.info}>
            <a>About us</a>
            <a>Delivery</a>
            <a>Contact</a>
          </div>
          <div className={styles.socialMedia}>
            <a><FaFacebookSquare className={styles.socialMediaIcon}/></a>
            <a><FaInstagram className={styles.socialMediaIcon}/></a>
            <a><FaLinkedin className={styles.socialMediaIcon}/></a>

          </div>
        </div>
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
