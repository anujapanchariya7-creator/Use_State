import { useState } from "react";

function ParentComponent()
{
const [age,setAge]=useState(22);
const [salary,setSalary]=useState(500000);

const incrementAge=()={
setAge(age+1)
}
const incrementSalary=()={
    setSalary(salary+5000)
}
return(
<div>
<Title/>

</div>


)

}
export default ParentComponent;