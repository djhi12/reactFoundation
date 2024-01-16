// import logo from './logo.svg';
import React from 'react';
import './App.css';

function Header(props) {
  return <h1>{props.title}</h1>;
}

function App() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div className="App">
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
      <Header title="React" />
      <Header title="A new title" />
    </div>
  );
}

export default App;
