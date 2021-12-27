import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api")
    .then(res => res.json())
    .then(data => setData(data))
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <b>{data.message}</b>
      </header>
    </div>
  );
}

export default App;
