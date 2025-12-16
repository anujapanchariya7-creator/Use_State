import { useState } from "react";

function Todoapp() {

const [tasks,setTasks]=useState(["tea" ,"coffee","milk"]);
const [newTask,setNewTask]=useState("");
    
function handleInputChange(event){
 setNewTask(event.target.value);
}
function addTask(){


}
function deleteTask(index){
   
return(
<div className="to-do-list">
    <h1> TODO LIST</h1>
    <div>
    <input type="text" 
    placeholder="Enter a new task" 
    value={newTask} 
    onChange={handleInputChange} 
    />
    <button className="add-button" onClick={
        addTask}>ADD</button>
    </div>
<ol>
    {tasks.map((tasks,index)=>
    <li key={index}>
        <span className="text"> {tasks}</span>
<button className="delete-button" 
onClick={()=>deleteTask(index)}>DELETE</button>

        </li>)}
       
</ol>
    </div>
)

}
}
export default Todoapp;