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
<div className={mode==="light"?"w3-container w3-responsive w3-card w3-center":"w3-container w3-responsive w3-card w3-center w3-grey"}>
<h2>About this web page</h2>
<div className="w3-border w3-container">
<h4 className="w3-left ">This website Engineering Materials contains the documents/pdfs which
will be helpful for the education of young talented Engineers.This website was made by a
student who has a Ambition to help others who are in need.If this website helped you dont forget giving
a like in the header of this page.If you have any trouble regarding the website please let me know
via the Contact us form in the menu option . If you want some material that is not present in this website let me know.
If you are interested check out my  works .  </h4>
<p className="w3-right"><em>Thank you</em></p>
</div>
<br />< br/>
</div>
< br />
<Footer />
</>
);

}
export default About;
