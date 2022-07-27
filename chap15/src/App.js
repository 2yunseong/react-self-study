import './App.css';
import ColorBox from './components/ColorBox.js';
import { ColorProvider } from './contexts/color.js';

function App() {
  return (
      <ColorProvider>
        <div className="App">
          <ColorBox />
        </div>
      </ColorProvider>    
    
  );
}

export default App;
