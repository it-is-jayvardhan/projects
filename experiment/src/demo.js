import {animal } from "./animal.js";
export default function Demo(){

const demo=animal.map(animal=>
<>
<h1>{animal.name}</h1>
<h1>{animal.age}</h1>
<h1>{animal.dob}</h1>
</>
);
return(<>
<h1>this is demo</h1>
{demo}
</>
);
}
