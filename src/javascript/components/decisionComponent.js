import React, { Component } from 'react';
import { render } from 'react-dom';

class DecisionComponent extends Component {
  constructor() {
    super();
    this.state = {
      role: '',
    };
  }

  componentDidMount() {
    const role = this.props.role;
    this.setState({role})
  }

  chooseIcon() {
     return (this.state.role === 'reject') ? 	'\u2715' : 	'\u2714';
  }

  render() {
    return (
      <div 
        className={this.state.role}
        onClick={this.props.onClick}
      >
        <span className="copy">{this.state.role}</span>      
        <span className={`${this.state.role}__icon`}>{this.chooseIcon()}</span>
      </div>
    );
  }
}

export default DecisionComponent
