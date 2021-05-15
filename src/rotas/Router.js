import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../app-components/homepage/HomePage';
import PaisesDetails from '../app-components/tela2-components/PaisesDetails';


const Router = () => {
const [confirmRegion, SetConfirmRegion] = useState(false)
const [exactRegion, setExactRegion] = useState('')

const confirmar = {
  confirma: confirmRegion,
  setConfirma:SetConfirmRegion,
  exataRegiao: exactRegion,
  setExataRegiao:setExactRegion
}

console.log(confirmRegion)
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage dados = {confirmar}/>
        </Route>

        <Route exact path = {'/:code'}>
          <PaisesDetails dados = {confirmar}/>
        </Route>
        
        <Route>
          <p>Erro 404: página não encontrada</p>
        </Route>
      </Switch>
    </BrowserRouter>
   
  );
};

export default Router;