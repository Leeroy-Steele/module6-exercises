import logo from './logo.svg';
import './App.css';

//// Components

import GreetingClassComponent from './components/GreetingClassComponent'  // component needs to start with capital letter
import EmojisFunctionComponent from './components/EmojisFunctionComponent'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <GreetingClassComponent name= {'Lee'}></GreetingClassComponent> */}
        <EmojisFunctionComponent></EmojisFunctionComponent>
      </div>
    </div>
  );
}

export default App;
