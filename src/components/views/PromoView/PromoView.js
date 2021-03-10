import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getOnePromo } from '../../../redux/productsRedux.js';
import {AddButton} from '../../features/AddButton/AddButton';

import styles from './PromoView.module.scss';

class Component extends React.Component
{
  


  render() {

    const {title, image, description, price} = this.props.promo[0];
    return (
      <div className={styles.root}>
        <img src={image}></img>
        <div className={styles.content__wrapper}>
          <h2>{title}</h2>
          <h1>{price}</h1>
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
          <button>Add to cart</button>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  watch: PropTypes.node,
};

const mapStateToProps = (state, props) => {
return ({
  promo: getOnePromo(state, props.match.params.id),
}) };

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as ProductView,
  Container as PromoView,
  Component as PromoViewComponent,
};
