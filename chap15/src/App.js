import './App.css';
import ColorBox from './components/ColorBox.js';
import ColorContext from './contexts/color';
function App() {
  return (
    <ColorContext.Provider value={{ color: 'red' }}>
      <div className="App">
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
