import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { getOneWatch, addWatchToCart } from '../../../redux/productsRedux.js';
import { fetchWatches } from '../../../redux/Data fetching/watches'

import styles from './WatchView.module.scss';

class Component extends React.Component {

  componentDidMount () {
    this.props.fetchWatches();
  };

  constructor(props) {
    super(props);

    this.state = {
      amount: 1,
    }

    this.handleSelectChange = this.handleSelectChange.bind(this);
}

  handleSelectChange(event) {
    this.setState({amount: parseInt(event.target.value)});
  }



  render() {

    const {title, image, description, price} = this.props.watch[0];
  
    return (
      <div className={styles.root}>
        <img src={image}></img>
        <div className={styles.content__wrapper}>
          <h2>{title}</h2>
          <h1>{price}</h1>
          <p>{description}</p>
          <div className={styles.amount}>
            <select value={this.state.amount} onChange={ (e) =>  this.handleSelectChange(e) }>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
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
};

const mapStateToProps = (state, props) => ({
  watch: getOneWatch(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
   addToCart: (data) => dispatch(addWatchToCart(data)),
   fetchWatches: ()=> dispatch(fetchWatches()),
 }); 

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as ProductView,
  Container as WatchView,
  Component as WatchViewComponent,
};
