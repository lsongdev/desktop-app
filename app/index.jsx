import React from 'react';
import { Window, TitleBar, Text, Button } from './components';

import './index.css';

class Index extends React.Component {
  state = { count: 0 }
  render() {
    const { count } = this.state;
    return (
      <Window>
        <TitleBar title="Electron App" controls ></TitleBar>
        <div className="content" >
          <Text>Hello World</Text>
          <Text>{ count }</Text>
          <Button onClick={ () => this.setState({ count: count+1 }) } >Click Me!</Button>
        </div>
      </Window>
    );
  }
}

export default Index;