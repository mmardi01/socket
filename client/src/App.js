import './App.css';
import { useState,useEffect } from 'react'
import {io} from 'socket.io-client'

let socket = io('http://localhost:3001');
function App() {
  
  const [message, setMessage] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit('send',{message: message});
    setMessage('');
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="send a message" />
        <button type='submit'>send</button>
      </form>
    </div>
  );
}

export default App;
