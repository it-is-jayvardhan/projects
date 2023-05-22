import{ BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./navbar";


function App() {
  return (
    <div className="App">
<Router>
<Routes>
<Route path="/"  element={<Navbar/>}>
<Route index element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
</Route>

</Routes>
</Router>

    </div>
  );
}

export default App;
