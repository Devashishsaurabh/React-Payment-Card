import './App.css';
import Card from './Components/Card';
import data from './Data/Data.json'
function App() {
    return (
      <div className='App'>
      <Card data={data}/>
      </div>
    )
};
export default App;
