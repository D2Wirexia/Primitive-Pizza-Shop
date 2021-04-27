import './App.css';
import MenuContainer from "./components/Menu/MenuContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import BasketContainer from "./components/Basket/BasketContainer";
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <HeaderContainer/>
       <Route path="/menu" render={() => <MenuContainer/>}/>
       <Route path="/basket" render={() => <BasketContainer/>}/>
    </div>
  );
}

export default App;
