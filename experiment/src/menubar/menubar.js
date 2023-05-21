//import root  from ".../index.js";
import "./menubar.css";
//import About from "./About.js";
export default function Menu(props){
//const navbar=document.getElementById("sidebar");

function show(){
const navbar=document.getElementById("sidebar");
//alert(navbar);
navbar.style.width="50%";

}
function close(){
const navbar=document.getElementById("sidebar");
navbar.style.width="0%";
}
return (<>
<div className="w3-sidebar w3-card w3-animate-zoom w3-responsive" id="sidebar">
<h1 className="w3-bar-item w3-button w3-border w3-hover-purple w3-hover-border-purple" onClick={close}>&times;</h1>
<ul className="w3-list">
<li className="w3-button  w3-hover-green w3-hover-border-green w3-round w3-ripple" ><h4>About</h4></li>
< br/>
<li className="w3-button  w3-hover-red w3-hover-border-red w3-round w3-ripple"><h4>My Works</h4></li>
</ul>
</div>
<div className="w3-container w3-card w3-responsive w3-mobile">

<h4 className="w3-right w3-button w3-border w3-ripple" onClick={show}>menu</h4>
<h1>{props.title}</h1>
</div>
</>);

}
//function rend_about(){
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<About  />)
//
//}
