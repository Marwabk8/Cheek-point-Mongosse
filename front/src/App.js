
import Navlist from './component/Navlist';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './component/Home';
import AddEdit from './component/AddEdit';
import Notfound from './component/Notfound';
import Product from './component/Product';
function App() {
  return (
    <div className="App">
 
 <Navlist/>
 <Routes>
<Route path= '/' element ={<Home/>}/>
<Route path ='/products' element={<Product/>}/>
<Route path ='/addEdit' element={<AddEdit/>}/>
<Route  path ='/*' element ={<Notfound/>}/>


 </Routes>

    </div>
  );
}

export default App;
