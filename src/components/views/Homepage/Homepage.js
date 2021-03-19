import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-elastic-carousel';
import clsx from 'clsx';
import styles from './Homepage.module.scss';
import { connect } from 'react-redux';

import { fetchPromoProducts } from '../../../redux/Data fetching/promoProducts';
import {PromoProduct} from '../../features/PromoProduct/PromoProduct';


class Component extends React.Component {

  componentDidMount () {
    this.props.fetchPromoProducts();
  }
  
  render () {

    const breakPoints = [
      {width: 400, itemsToShow: 1},
      {width: 1200, itemsToShow:3},
    ];

    const {className, promoProducts} = this.props;
  
    return  (
      <div className={clsx(className, styles.root)}>
        <div className={styles.elements__wrapper }>
          <div className={styles.title}>
            <h1>Check out our sales!</h1>
          </div>
          <div className={styles.saleProducts}>
            <Carousel breakPoints={breakPoints}>
              {promoProducts && promoProducts.map(watch => (
                <PromoProduct key={watch._id} {...watch}/>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fetchPromoProducts: PropTypes.node,
  promoProducts: PropTypes.node,
};

const mapStateToProps = state => ({
  promoProducts: state.promoProducts.data,
});

const mapDispatchToProps = dispatch => ({
  fetchPromoProducts: () => dispatch(fetchPromoProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Homepage,
  Component as HomepageComponent,
};
