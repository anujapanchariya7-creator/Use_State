import { useState } from "react";

function Loop(){

const [bgColor,setBgColor]=useState("green");//bgColor
const [number,setNumber]=useState(0);
function toggleColor(){
    setBgColor(bgColor==='green'?'red':'green');

}
function handleChange(e){
setNumber(Number(e.target.value));
let t=0;
for(let i=0;i<num;i++)
{ 
   t +=i;
   console.log(i);
}

}
return(
    <div style={{padding:'20px'}}>
        <div style={{backgroundColor: bgColor,padding:"20px",width:"220px",
            borderRadius:"20px" }}>
                <input type="number" placeholder="Enter number" value={number}
                onChange={handleChange}/>
            </div>

            <button onClick={toggleColor}>Toggle</button>
            <p> Enter  number :{number }</p>
            <p>loop result :{t}</p>
    </div>
)

}
export default Loop;