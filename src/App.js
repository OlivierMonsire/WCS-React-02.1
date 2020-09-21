import React from 'react';
import './App.css';
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact name="Derrick Simpson" avatar="https://randomuser.me/api/portraits/men/24.jpg" isOnline/>
    </div>
  );
}

export default App;
