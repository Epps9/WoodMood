import React from 'react';
import PropTypes from 'prop-types';
import styles from './BraceletView.module.scss';
import { connect } from 'react-redux';

import {Link} from 'react-router-dom';
import { getOneBracelet, addBraceletToCart } from '../../../redux/productsRedux.js';
import { fetchBracelets } from '../../../redux/Data fetching/bracelets';


class Component extends React.Component {

  componentDidMount () {
    this.props.fetchBracelets();
  }

  constructor(props) {
    super(props);

    this.state = {
      amount: 1,
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event) {
    this.setState({amount: event.target.value});
  }
  
  render() {

    const {title, image, description, price} = this.props.bracelet[0];
  
    return (
      <div className={styles.root}>
        <img src={image} alt=''></img>
        <div className={styles.content__wrapper}>
          <h2>{title}</h2>
          <h1>{price}$</h1>
          <p>{description}</p>
          <div className={styles.amount}>
            <select value={this.state.amount} onChange={this.handleSelectChange}>
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
  bracelet: PropTypes.node,
  fetchBracelets: PropTypes.node,
  addToCart: PropTypes.node,
};

const mapStateToProps = (state, props) => ({
  bracelet: getOneBracelet(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data) => dispatch(addBraceletToCart(data)),
  fetchBracelets: () => dispatch(fetchBracelets()),
}); 

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as BraceletView,
  Component as BraceletViewComponent,
};
