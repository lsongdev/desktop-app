import React from 'react';

class Text extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>{ children }</div>
    );
  }
}

export default Text;