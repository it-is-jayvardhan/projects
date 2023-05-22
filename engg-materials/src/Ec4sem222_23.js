import Menu from "./menu.js";
import Footer from "./footer/Footer.js";
import {useState } from "react";
import Homebar from "./Homebar.js";
import {mo} from "./App.js";
import {data} from "./ec4sem2223_data.js";
export default function Sem4Ece22_23(){
 const [mode,setMode]=useState(mo);
const toggleMode=()=>{
if(mode==="dark"){
setMode("light")

}
else{
setMode("dark")
}
};


const table=data.map(data=>
	<tr key={data.id} className={mode==="light"?"w3-center w3-white":"w3-black w3-center"}>
	<td className="w3-center">{data.id}</td>
	<td className="w3-center">{data.subcode}</td>
	<td className="w3-center">{data.subject}</td>
	<td className="w3-center">{data.size}</td>
	<td className="w3-center w3-hover-ios-grey w3-ripple"><a href={data.link} download><i className="material-icons">download</i></a></td>
	<td className="w3-center w3-hover-ios-background w3-ripple"><a href={data.preview}><i className="material-icons">preview</i></a></td>
	</tr>
)


return (<>
<Menu toggle={toggleMode} mod={mode} />
<Homebar mod={mode} toggle={toggleMode}/>
<div className={mode==="light"?"w3-container w3-card w3-center":"w3-container w3-card w3-center w3-grey"}>
<h2 className="w3-xxlarge w3-container">Ece 2022-2023</h2>
	<table className="w3-table-all w3-black w3-border w3-hide-small ">
    <tbody>
	<tr className={mode==="light"?"w3-center w3-white":"w3-black w3-center"} >
	<th className="w3-center">sl no</th>
	<th className="w3-center"> subject code</th>
	<th className="w3-center">Subject</th>
	<th className="w3-center">size</th>
	<th className="w3-center">Download Link</th>
	<th className="w3-center">Preview</th>
	</tr>
	{table}
    </tbody>
	</table>
    	<table className="w3-table-all w3-black w3-border w3-hide-large w3-hide-medium w3-responsive ">
    <tbody>
	<tr className={mode==="light"?"w3-center w3-white":"w3-black w3-center"}>
	<th className="w3-center">sl no</th>
	<th className="w3-center"> subject code</th>
	<th className="w3-center">Subject</th>
	<th className="w3-center">size</th>
	<th className="w3-center">Download Link</th>
	<th className="w3-center">Preview</th>
	</tr>
	{table}
</tbody>
	</table>
<br /><br /><br />
</div>
<Footer />
</>
);

}
