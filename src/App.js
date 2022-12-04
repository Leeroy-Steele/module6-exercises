
import './App.css';

//// Components - They need to start with capital letter

import GreetingClassComponent from './components/GreetingClassComponent' 
import EmojisFunctionComponent from './components/EmojisFunctionComponent'
import APICall from './components/PokemonAPICall'

import HeaderSection from './components/HeaderSection'
import FooterSection from './components/FooterSection'
import LeftNav from './components/LeftNav'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <GreetingClassComponent name= {'Lee'}></GreetingClassComponent> */}
        {/* <EmojisFunctionComponent></EmojisFunctionComponent> */}
        {/* <APICall></APICall> */}

        <HeaderSection></HeaderSection>
        <LeftNav></LeftNav>
        <FooterSection></FooterSection>
      </div>
    </div>
  );
}

export default App;
