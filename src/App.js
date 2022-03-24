//import logo from './logo.svg';
import React from 'react';
import './App.css';
const name= <span>nilam</span>
const newElement=React.createElement('h2',{className:'newElement'},'hlw world')
const test = ()=>{
  alert('hi')
}
const age=function(a){
  if (a>8){
    return <span>"You are eligable"</span>
  }
  else
  {
    return <span>"You are not eligable"</span>
  }
}
function App() {
  return (
    <div className="App">
<h1>hi {name}</h1>
{newElement}
<button onClick={test}></button>
{age(19)}
    </div>
  );
}

export default App;
