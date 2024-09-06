import logo from './logo.svg';
import './App.css';
import Tours from './components/Tours';
import data from './data';
import { useState } from 'react';

//data will  be passed as props

//use state variable to store data


function App() {
  const [dataa, setdata] = useState(data);

  //data yha s arha hai issliye remove function yhi specify hoga - will remove that particular tour with specific id
  //Parent n function bnaya
  function removetour(id) {
    // wo tour nikal liye jinki id != id jo haame htani hi
    const newtour = dataa.filter(dataa => dataa.id !== id);
    setdata(newtour);
  }
  function refreshhandler(){
     setdata(data);
  }

  //data yha s aa rha hai issliye refresh function bhi yhi specify hoga
  if(dataa.length === 0){
    return(
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button onClick={refreshhandler} className='btn-white'>Refresh</button>
      </div>
    )
  }
  return (
    <div className="App">
      {/* parent will pass that function as props */}
      <Tours tours={dataa} removetours = {removetour}></Tours>
    </div>
  );
}

export default App;
