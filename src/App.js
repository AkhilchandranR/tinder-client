import './App.css';
import Header from './components/Header/Header';
import SwipeButton from './components/SwipeButtons/SwipeButton';
import TinderCards from './components/TinderCards/TinderCards';

function App() {
  return (
    <div className="App">
      <Header/>
      <TinderCards/>
      <SwipeButton/>
    </div>
  );
}

export default App;
