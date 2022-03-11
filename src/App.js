import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div>
      <h1>Gif Generator</h1>
      <div className='main-container'>
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
