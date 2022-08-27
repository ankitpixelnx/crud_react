import Crud from "./components/Crud";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import NavExample from "./components/Navbar";
import Home from "./components/Home";
import Admin from "./Admin";
const App=()=>{
return(<>
<NavExample/>
<Routes>
<Route path="/" element={<Home/>}></Route>
  <Route path="/crud" element={<Crud/>}></Route>
   <Route path="/about" element={<Crud/>}></Route>
  <Route path="/contact" element={<Crud/>}></Route>
  <Route path="/services" element={<Crud/>}></Route>
  <Route path="/admin" element={<Admin/>}></Route>
</Routes>
</>)

}
export default App;