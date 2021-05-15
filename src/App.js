import HomePage from './app-components/homepage/HomePage'
import { useState } from 'react';
import Router from './rotas/Router';
import PaisesDetails from './app-components/tela2-components/PaisesDetails';
import {ContextoPaises} from './context/ContextoPaises';


function App() {

  return (
    <div className="App">
     
  
<Router/>
  

    </div>
  );
}

export default App;
