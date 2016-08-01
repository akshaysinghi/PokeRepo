import React, { Component } from 'react';
import Button from './button';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.showNext 
  }

  render() {
    const { nextPage, prevPage, previous, next } = this.props;
    return (
      <footer className={'pull-right'}>
        {previous && <Button type={'button'} text={"PREV"} action={prevPage}/>}
        {next && <Button type={'button'} text={"NEXT"} action={nextPage}/>}
      </footer>
    );
  }

}