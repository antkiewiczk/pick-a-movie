import React, { Component } from 'react';

class DecisionComponent extends Component {
  constructor() {
    super();
    this.state = {
      purpose: '',
    };
  }

  componentDidMount() {
    const purpose = this.props.purpose;
    this.setState({purpose})
  }

  chooseIcon() {
     return (this.state.purpose === 'reject') ? 	'\u2715' : 	'\u2714';
  }

  render() {
    return (
      <div 
        className={this.state.purpose}
        onClick={this.props.onClick}
      >
        <span className="copy">{this.state.purpose}</span>      
        <span className={`${this.state.purpose}__icon`}>{this.chooseIcon()}</span>
      </div>
    );
  }
}

export default DecisionComponent
