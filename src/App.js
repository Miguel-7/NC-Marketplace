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
          <Routes>
            <Route path = '/' element = {<AllItemsPage/>}/>
            <Route path = '/sell' element = {<SellItemPage/>}/>
          </Routes> 
      </div>
      </BrowserRouter>
  );
}

export default App;
