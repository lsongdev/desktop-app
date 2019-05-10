import React from 'react';
import { Window, TitleBar, Text } from './components';

class Index extends React.Component {
  render() {
    return (
      <Window>
        <TitleBar title="hello" controls ></TitleBar>
        <Text>Hello World</Text>
      </Window>
    );
  }
}

export default Index;