import React from 'react';
import PropTypes from 'prop-types';
import styles from './Bracelets.module.scss';
import clsx from 'clsx';
import { connect } from 'react-redux';

import {Bracelet} from '../../features/Bracelet/Bracelet';
import { fetchBracelets } from '../../../redux/Data fetching/bracelets';

class Component extends React.Component { 

  componentDidMount () {
    this.props.fetchBracelets();
  }

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
  fetchBracelets: PropTypes.node,
};

const mapStateToProps = state => {

  return ({
    bracelets: state.bracelets.data,
  }); 
};

const mapDispatchToProps = dispatch => ({
  fetchBracelets: () => dispatch(fetchBracelets()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Bracelets,
  Component as BraceletsComponent,
};
