import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { action, text, type } = this.props;
    return (
      <button className={['btn btn-default']} type={type} onClick={action}>{text}</button>
    )
  }
}