import React from 'react';

import './index.css';

class Button extends React.Component {
  render(){
    const { text, children, ...props } = this.props;
    return <button className="button" { ...props } >{ text || children }</button>
  }
}

export default Button;