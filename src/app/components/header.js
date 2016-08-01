import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { action, text, type } = this.props;
    return (
      <header className={'text-center'}>
        <h1>Pokemon!</h1>
        <h4>Gotta catch em all</h4>
      </header>
    );
  }
}