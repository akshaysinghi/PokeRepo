import React, { Component } from 'react';

import { connect } from 'react-redux';
import Footer from '../components/footer';
import { prevPage, nextPage } from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    previous : state.prevUrl,
    next: state.nextUrl,
  };
};

const mapDispatchToProps = (dispatch) => {
  
  return {
    prevPage: () => {
      dispatch(prevPage());
    },
    nextPage: () => {
      dispatch(nextPage());
    },
  };

};


export default connect(mapStateToProps, mapDispatchToProps)(Footer);
