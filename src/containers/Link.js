import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setVisiblityFilter} from '../actions';
import {Button} from 'react-bootstrap';

const Link = ({active, children, onClick}) => (
  <Button className='btn-secondary' active={active} onClick={ (e) => {
    e.preventDefault();
    onClick();
  }}>{children}</Button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {active: state.visiblityFilter === ownProps.filter};
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {onClick: () => dispatch(setVisiblityFilter(ownProps.filter))};
};

const conLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
export default conLink;