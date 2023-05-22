import "./menubar.css";
import render_about from "./render_about.js";
import render_contact from "./render_contact.js";
import {useState,useEffect} from "react";
import { doc,setDoc,getDoc } from "firebase/firestore";
import {db } from "./firebase.js";

export default function Menu(props){
const [value,setValue]=useState(0);
const [count,setCount]=useState(0);

useEffect(()=>{
async function read(){
const docRef=doc(db,"engg-mat","count");
const docSnap=await getDoc(docRef);
let val=docSnap.data();
setValue(val.count);
setCount(value+1);
}
read();

},[value])




function show(){
const navbar=document.getElementById("sidebar");
//alert(navbar);
navbar.style.width="50%";
}
function increment(){
if(localStorage.count){
alert("you have already liked so pls you cannot like again 😊️");
}
else{

setCount((count)=>count+1);
localStorage.count=count;

write();
async function write(){
await setDoc(doc(db,"engg-mat","count"),{
count:count
});
}

alert("thanks for the like 😇️");

}
}
function close(){
const navbar=document.getElementById("sidebar");
navbar.style.width="0%";
}
return (<>
<div className={props.mod==="light"?"w3-sidebar w3-card w3-animate-zoom w3-responsive w3-orange ":"w3-sidebar w3-card w3-animate-zoom w3-responsive w3-dark-grey"} id="sidebar">

<h1 className="w3-bar-item w3-button w3-border w3-hover-purple w3-hover-border-purple" onClick={close}>&times;</h1>

<ul className="w3-list">
<li className="w3-btn w3-border-green w3-border w3-hover-green  w3-round w3-ripple" onClick={render_about}><h4>About</h4> </li>
<br /><br /><br />
<li className="w3-btn w3-border w3-hover-red w3-border-red w3-round w3-ripple"><h4>My Works</h4></li>
<br /><br /><br />
<li className="w3-btn w3-border w3-hover-blue w3-border-blue w3-round w3-ripple" onClick={render_contact}><h4>Contact us</h4></li>
</ul>

</div>
<div className={props.mod==="light"?"w3-container w3-card w3-responsive w3-mobile":"w3-container w3-card w3-responsive w3-mobile w3-black"}>

<h4 className="w3-left w3-button w3-border w3-ripple" onClick={show}><i className="material-icons w3-xlarge">menu</i></h4>
<h4 className="w3-right w3-button w3-border  w3-ripple " onClick={increment}><i className="fa fa-thumbs-o-up w3-xlarge">{count}</i></h4>
<h4 onClick={props.toggle} className="w3-right w3-button w3-border  w3-ripple "><i className="material-icons w3-xlarge" >{props.mod==="light"?'light_mode':'dark_mode'}</i></h4>
</div>
</>);

}

//style={{value==='light'?'backgroundColor:"#D4E367",color:"black" ':'backgroundColor:"#2e2f46",color:"white"'}}
