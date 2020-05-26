import React, { useState } from 'react'
import './App.scss';
import VikingDemo from './strategy/VikingDemo';

function App() {
  const [pattern, setPattern] = useState('strategy')

  const getPatternDemo = () => {
    switch(pattern) {
      case 'strategy':
        return <VikingDemo />
      default:
        return <h1>no pattern</h1>
    }
  }

  const onButtonClick = (patt) => {
    setPattern(patt)
  }

  return (
    <div className="App">
        <nav>
          <button onClick={() => onButtonClick('strategy')}>strategy</button>
          <button onClick={() => onButtonClick()}>no pattt</button>
        </nav>
      <div className="patterns">
        {getPatternDemo()}
      </div>
            
    </div>
  );
}

export default App;
