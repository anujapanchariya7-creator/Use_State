import { useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function ParentComponent()
{
const [age,setAge]=useState(22);
const [salary,setSalary]=useState(500000);

const incrementAge=()=>{

setAge(age+1)
}
const incrementSalary=()=>{
    setSalary(salary+5000)
}
return(
    <div>
    <Title/>
    <Count text="Age" count={age}/>
    <Button handleClick={incrementAge} ></Button>

    <Count text="Salary" count={salary}/>
    <Button handleClick={incrementSalary} ></Button>
    </div>
    )

}
export default ParentComponent;