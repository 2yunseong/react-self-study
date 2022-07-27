import './App.css';
import ColorBox from './components/ColorBox.js';
import SelectColors from './components/SelectColors';
import { ColorProvider } from './contexts/color.js';

function App() {
  return (
      <ColorProvider>
        <div className="App">
          <SelectColors />
          <ColorBox />
        </div>
      </ColorProvider>    
    
  );
}

export default App;
