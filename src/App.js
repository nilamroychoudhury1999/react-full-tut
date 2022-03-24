//import logo from './logo.svg';
import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Header from './component/header';
import CHeader from './component/cHeader';
import Channel from './component/Channel';
class App extends React.Component
{render()

{
  return (<div className="App">
<Header name="anuj"><p>hi anuj</p></Header>
<Header name="anuj"/>
<Header name="anuj"/>
<CHeader name="anuj"/>
<Channel/>
</div>)
  
 

}
}

export default App;
