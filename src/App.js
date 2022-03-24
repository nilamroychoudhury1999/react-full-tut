//import logo from './logo.svg';
import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Header from './component/header';
import CHeader from './component/cHeader';
class App extends React.Component
{render()

{
  return (<div className="App">
<Header name="anuj"><p>hi anuj</p></Header>
<Header name="anuj"/>
<Header name="anuj"/>
<CHeader/>
</div>)
  
 

}
}

export default App;
