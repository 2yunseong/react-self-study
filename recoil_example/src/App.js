import { RecoilRoot } from 'recoil';
import './App.css';
import ToDo from './Todo/ToDo';

function App() {
  return (
    <RecoilRoot>
      <div className='App'>
        <ToDo />
      </div>
    </RecoilRoot>
  );
}

export default App;
