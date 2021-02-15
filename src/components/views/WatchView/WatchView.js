import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getOneWatch } from '../../../redux/productsRedux.js';
import {AddButton} from '../../features/AddButton/AddButton';

import styles from './WatchView.module.scss';

class Component extends React.Component
{
  


  render() {

    const {title, image, description, price} = this.props.watch[0];
  
    return (
      <div className={styles.root}>
        <img src={image}></img>
        <div className={styles.contentWrapper}>
          <h2>{title}</h2>
          <h1>{price}</h1>
          <p>{description}</p>
          <div className={styles.amount}>
            <AddButton/>
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

const mapStateToProps = (state, props) => ({
  watch: getOneWatch(state, props.match.params.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as ProductView,
  Container as WatchView,
  Component as WatchViewComponent,
};
