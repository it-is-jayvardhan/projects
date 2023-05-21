import render_home from "./render_home.js";
export default function Homebar(props){
return(
<div className={props.mod==="light"?"w3-container w3-card w3-responsive w3-mobile":"w3-container w3-card w3-responsive w3-mobile w3-black"}>
<button className="w3-btn" onClick={render_home}><i className="material-icons w3-xlarge" >home</i></button>
</div>
);

}
