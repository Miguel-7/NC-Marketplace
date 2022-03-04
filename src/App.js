import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AllItemsPage from "./components/AllItemsPage";
import SellItemPage from "./components/SellItemPage";
import Header from "./components/Header";


function App() {
  return (
      <BrowserRouter>
      <div className = "App">
        <Header/>
          <routes>
            <Route path = '/items' element = {<AllItemsPage/>}/>
            <Route path = '/sell' element = {<SellItemPage/>}/>
          </routes> 
      </div>
  );
      </BrowserRouter>
}

export default App;
