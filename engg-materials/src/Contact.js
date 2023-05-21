import Menu from "./menu.js";
import Footer from "./footer/Footer.js";
import {useState } from "react";
import Homebar from "./Homebar.js";
import {mo} from "./App.js";

export default function Contact(){
 const [mode,setMode]=useState(mo);
const toggleMode=()=>{
if(mode==="dark"){
setMode("light")

}
else{
setMode("dark")
}
};


return(
<>
<Menu toggle={toggleMode} mod={mode} />
<Homebar mod={mode} toggle={toggleMode}/>
<div className={mode==="light"?"w3-container w3-card w3-center":"w3-container w3-card w3-center w3-grey"}>
<h2>CONTACT US</h2>
<table className="w3-table-all w3-responsive">
<tr className={mode==="light"?"w3-center":"w3-grey w3-center"}>
<td>Name</td>
<td><input type="text" placeholder="Enter your name" required/></td>
</tr>
<tr className={mode==="light"?"w3-center":"w3-grey w3-center"}>
<td>Email</td>
<td><input type="email" placeholder="Enter your email" required/></td>
</tr>
<tr className={mode==="light"?"w3-center":"w3-grey w3-center"}>
<td>Content</td>
<td><textarea type="text" placeholder="Enter your content"/></td>
</tr>
<tr className={mode==="light"?"w3-center":"w3-grey w3-center"}>
<td></td>
<td><button className="w3-ripple w3-round w3-btn w3-border w3-hover-black w3-red w3-hover-border-black">Submit</button></td>
</tr>
</table>
<br /><br /><br />
</div>

<Footer />
</>)

}
