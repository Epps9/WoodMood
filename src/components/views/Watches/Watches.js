import React from 'react';
import PropTypes from 'prop-types';
import {Watch} from '../../features/Watch/Watch'

import clsx from 'clsx';

import { connect } from 'react-redux';
import { fetchWatches } from '../../../redux/Data fetching/watches';

import styles from './Watches.module.scss';

class Component extends React.Component {

  componentDidMount () {
    this.props.fetchWatches();
  };

  render () {

    const {className, watches} = this.props;

    return (
    <div className={clsx(className, styles.root)}>
      {watches && watches.map( item => (
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

const mapStateToProps = state => {
  console.log('co to watchess', state.watches.data);
  console.log('co to loading', state.watches.loading)

return ({
  watches: state.watches.data,
})};

const mapDispatchToProps = dispatch => ({
fetchWatches: () => dispatch(fetchWatches()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Watches,
  Container as Watches,
  Component as WatchesComponent,
};
