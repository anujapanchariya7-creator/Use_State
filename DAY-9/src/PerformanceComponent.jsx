import { useState } from "react";

function Loop(){

const [bgColor,setBgColor]=useState("green");//bgColor
const [number,setNumber]=useState(0);
function toggleColor(){
    setBgColor(bgColor==='green'?'lightgreen':'green');

}
function handleChange(e){
setNumber(Number(e.target.value));

}
return(
    <div style={{padding:'20px'}}>
        <div style={{backgroundColor: bgColor,padding:"20px",width:"220px",
            borderRadius:"20px" }}>
                <input type="number" placeholder="Enter number" value={number}
                onChange={handleChange}/>
            </div>

    </div>
)

}
export default Loop;