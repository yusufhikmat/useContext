import './App.css';
import ComponentC from './components/ComponentC';
import React from 'react';
import ComponentF from './components/ComponentF';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {

  return (
    <div className="App">
    <UserContext.Provider value={'hikmah'}>
    <ChannelContext.Provider value={'ayo'}>
     <ComponentF />
     </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
