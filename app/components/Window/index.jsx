import React from 'react';

import './index.css';

class Window extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="window" >{ children }</div>
    );
  }
}

export default Window;