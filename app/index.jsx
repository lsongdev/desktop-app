import React from 'react';
import { Window, TitleBar, Text } from './components';

class Index extends React.Component {
  render() {
    return (
      <Window>
        <TitleBar title="untitled text 5" controls />
        <Text>Hello World</Text>
      </Window>
    );
  }
}

export default Index;