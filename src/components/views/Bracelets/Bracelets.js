import React from 'react';
import PropTypes from 'prop-types';
import {Bracelet} from '../../features/Bracelet/Bracelet';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { fetchBracelets } from '../../../redux/Data fetching/bracelets';

import styles from './Bracelets.module.scss';

class Component extends React.Component { 

  componentDidMount () {
    this.props.fetchBracelets();
  };

  render() {

    const {className, bracelets} = this.props;

    return(
      <div className={clsx(className, styles.root)}>
        {bracelets && bracelets.map( item => (
          <Bracelet key={item._id} {...item}/>
        ))}
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  bracelets: PropTypes.node,
};

const mapStateToProps = state => {
  console.log('co to bracelets', state.bracelets.data);
  console.log('co to loading', state.bracelets.loading)

return ({
  bracelets: state.bracelets.data,
})};

const mapDispatchToProps = dispatch => ({
  fetchBracelets: () => dispatch(fetchBracelets()),
  });

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Bracelets,
  Container as Bracelets,
  Component as BraceletsComponent,
};
