import './App.css';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from './Head';
import Landing from './Landing';
import './style.css'
function App() {

  return (
    <div className="App">
      <ToastContainer />
      <Head/>
      <Landing/>
    </div>
  );
}

export default App;
