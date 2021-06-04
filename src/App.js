import react from 'react';
import './App.css';
import Covid from './components/covid';
import { Route, Switch } from "react-router-dom";
import Statewise from "./components/statewise";


const App =() => {
  return(
    <>
    <Switch>
    <Route exact path = "/" component ={Covid}>
        <Covid />
      </Route>
    <Route path="/statewise" component={Statewise}>
        <Statewise />
      </Route>
      
    </Switch>
   </>
  )
}

export default App;
