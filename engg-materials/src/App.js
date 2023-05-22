import Menu from "./menu.js";
//import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import "./firebase.js";
import root from "./index.js";
import Footer from "./footer/Footer.js";
import {useState } from "react";
import "./App.css";
import Sem4Ece22_23 from "./Ec4sem222_23.js";
var mo;
function App() {
 const [mode,setMode]=useState('dark');
mo=mode;
const toggleMode=()=>{
if(mode==="dark"){
setMode("light")

}
else{
setMode("dark")
}
};

function rend_ece22_23(){
root.render(< Sem4Ece22_23 /> )
}

  return (
<>
    <div className={mode==="light"?'w3-card w3-white w3-responsive':'w3-card w3-grey w3-responsive'}>
<Menu toggle={toggleMode} mod={mode} />
<div className="w3-card w3-container w3-responsive w3-padding-32">
<div className="w3-card w3-container w3-padding-32">
<h1 className="w3-center">Engineering-materials</h1>
<h1 className="w3-center">2022-2023</h1>
<table className="w3-table-all">
<tbody>
<tr>
<td className={mode==="light"?'w3-center w3-padding-4 w3-btn w3-border w3-hover-deep-orange w3-border-deep-orange ':'w3-center w3-padding-4 w3-btn w3-border w3-hover-deep-orange w3-border-deep-orange w3-grey' } onClick={rend_ece22_23}><h4>4th sem EC 2022-2023</h4></td>
</tr>
</tbody>
</table>
<br/><br/>
</div>
</div>
</div>
<Footer/>
</>
  );
}

export default App;
export {mo}

//<tr>
//
//<td  className={mode==="light"?'w3-center w3-padding-4 w3-btn w3-border w3-hover-indigo w3-border-indigo ':'w3-center w3-padding-4 w3-btn w3-border w3-hover-indigo w3-border-indigo w3-grey' } ><h4>2nd sem</h4></td>
//</tr>
