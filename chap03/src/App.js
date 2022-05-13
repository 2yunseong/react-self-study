import ChildComponent from './propsExample/ChildComponent';
import DestructurePropsComponent from './propsExample/DestructurePropsComponent';
import './App.css';
import PropTypesExample from './propsExample/PropTypesExample';
import UseStateExample from './stateExample/UseStateExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      
        <ChildComponent>Children</ChildComponent>          
        <DestructurePropsComponent name="2yunseong">Second Children</DestructurePropsComponent> 
        <PropTypesExample>Third Children</PropTypesExample>
        <UseStateExample />
    </div>
  );
}

export default App;
