import React from 'react';
import PropTypes from 'prop-types';
import {Watch} from '../../features/Watch/Watch'

import clsx from 'clsx';

import { connect } from 'react-redux';
import { fetchWatches } from '../../../redux/axios';

import styles from './Watches.module.scss';

class Component extends React.Component {

  componentDidMount () {
    this.props.fetchWatches();
  };

  render () {

    const {className, watches} = this.props;

    return (
    <div className={clsx(className, styles.root)}>
      {watches.map( item => (
        <Watch key={item._id} {...item}/>
      ))}
    </div>
    )
  }
}

Component.propTypes = {
  className: PropTypes.string,
  watches: PropTypes.node,
};

const mapStateToProps = state => ({
  watches: state.watches,
});

const mapDispatchToProps = dispatch => ({
fetchWatches: () => dispatch(fetchWatches()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Watches,
  Container as Watches,
  Component as WatchesComponent,
};
