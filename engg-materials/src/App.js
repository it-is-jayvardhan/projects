import Menu from "./menu.js";
import "./firebase.js";
import Footer from "./footer/Footer.js";
import {useState } from "react";
import "./App.css";
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
<td className={mode==="light"?'w3-center w3-padding-4 w3-btn w3-border w3-hover-deep-orange w3-border-deep-orange ':'w3-center w3-padding-4 w3-btn w3-border w3-hover-deep-orange w3-border-deep-orange w3-grey' }><h4>4th sem</h4></td>
</tr>
<tr>

<td className={mode==="light"?'w3-center w3-padding-4 w3-btn w3-border w3-hover-indigo w3-border-indigo ':'w3-center w3-padding-4 w3-btn w3-border w3-hover-indigo w3-border-indigo w3-grey' }><h4>2nd sem</h4></td>
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
