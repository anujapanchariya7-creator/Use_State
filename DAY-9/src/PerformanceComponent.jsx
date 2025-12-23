import { useState } from "react";

function Loop(){

const [bgColor,setBgColor]=useState("green");
const [number,setNumber]=useState(0);
function toggleColor(){
    setBgColor(bgColor==='green'?'lightgreen':'green');
    
}

}
export default Loop;