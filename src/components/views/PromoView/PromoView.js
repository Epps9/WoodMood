import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PromoView.module.scss';
import { connect } from 'react-redux';

import { getOnePromo } from '../../../redux/productsRedux.js';
import { fetchPromoProducts } from '../../../redux/Data fetching/promoProducts';
import { addPromoToCart } from '../../../redux/productsRedux';


class Component extends React.Component
{
  
  componentDidMount () {
    this.props.fetchPromoProducts();
  }

  constructor(props) {
    super(props);

    this.state = {
      amount: 1,
    };
  }

  render() {

    const {title, image, description, price} = this.props.promo[0];
    return (
      <div className={styles.root}>
        <img src={image} alt=''></img>
        <div className={styles.content__wrapper}>
          <h2>{title}</h2>
          <h1>{price}$</h1>
          <p>{description}</p>
          <div className={styles.amount}>
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
              <option>10</option>
            </select>
          </div>
          <Link to="/cart"><button onClick={() => 
            this.props.addToCart({_id: this.props.match.params.id, amount: this.state.amount})}>Add to cart</button></Link>        
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  watch: PropTypes.node,
  fetchPromoProducts: PropTypes.node,
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.node,
  addToCart: PropTypes.node,
};

const mapStateToProps = (state, props) => {
  return ({
    promo: getOnePromo(state, props.match.params.id),
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPromoProducts: () => dispatch(fetchPromoProducts()),
  addToCart: (data) => dispatch(addPromoToCart(data)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as PromoView,
  Component as PromoViewComponent,
};
