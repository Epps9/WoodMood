import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-elastic-carousel';
import {PromoProduct} from '../../features/PromoProduct/PromoProduct'

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

class Component extends React.Component {
  
  render () {

    const breakPoints = [
      {width: 400, itemsToShow: 1},
      {width: 1200, itemsToShow:3}
    ]

    const {className, children, watches} = this.props;
  
    return  (
      <div className={clsx(className, styles.root)}>
        <div className={styles.elementsWrapper}>
            <div className={styles.title}>
              <h1>Check out our sales!</h1>
            </div>
            <div className={styles.saleProducts}>
              <Carousel breakPoints={breakPoints}>
              {watches.map(watch => (
              <PromoProduct key={watch.id} {...watch}/>
              ))}
              </Carousel>
            </div>
        </div>
      </div>
    )
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  watches: state.products.promoProducts,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
