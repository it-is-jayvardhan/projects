import Menu from "./menu.js";
import Footer from "./footer/Footer.js";
import {useState } from "react";
import Homebar from "./Homebar.js";
import {mo} from "./App.js";

function About(props){
 const [mode,setMode]=useState(mo);
const toggleMode=()=>{
if(mode==="dark"){
setMode("light")

}
else{
setMode("dark")
}
};
return (<>
<Menu toggle={toggleMode} mod={mode} />
<Homebar mod={mode} toggle={toggleMode}/>
<div className={mode==="light"?"w3-container w3-card w3-center":"w3-container w3-card w3-center w3-grey"}>
<h2>About this web page</h2>
<h4 className="w3-left">hello this is about page</h4>
</div>
<Footer />
</>
);

}
export default About;
