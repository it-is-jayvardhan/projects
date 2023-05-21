import Menu from "./menubar.js"
import "./firebase.js";
import {useEffect,useState} from "react";
import { doc,setDoc,getDoc } from "firebase/firestore";
import {db } from "./firebase.js";


function App() {
const [value,setValue]=useState(null);
const [count,setCount]=useState(0);
useEffect(()=>{

async function read(){
const docRef=doc(db,"engineering_mate","count");
const docSnap=await getDoc(docRef);
let val=docSnap.data();
setValue(val.count);
setCount(value+1);
}
read();

},[value])
function Increment(){
setCount((count+1));
write();
async function write(){
await setDoc(doc(db,"engineering_mate","count"),{
count:count
});
}
}

  return (
<>


<Menu title="Engineering materials" />
<div className="w3-container w3-center" >
<h1>{count}</h1>
<button className="w3-button w3-ripple w3-border" onClick={Increment}>click here to increase value</button>
</div>
</>
  );
}


export default App;
