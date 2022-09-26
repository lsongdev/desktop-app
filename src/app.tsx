import React, { useState } from 'react';
import { Window, TitleBar, Text, Button } from './components';

import './index.css';

const Index = () => {
  const [count, setCount] = useState(0);
  return (
    <Window>
      <TitleBar title="Electron App" controls ></TitleBar>
      <div className="content" >
        <Text>Hello World</Text>
        <Text>{ count }</Text>
        <Button onClick={ () => setCount(count+1) } >Click Me!</Button>
      </div>
    </Window>
  );
};

export default Index;