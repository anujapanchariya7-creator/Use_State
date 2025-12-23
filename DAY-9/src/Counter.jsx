function Counter(){
    const [counterOne,setCounterOne] =useState(0)
    const [counterTwo,setCounterTwo] =useState(0)
    const incrementOne=()=>{
        setCounterOne(counterOne+1)
    }
    const incr

    return(
    <div> 
    <div><button onClick={incrementOne}> Counter One -{counterOne}</button></div>
    <div><button onClick={incrementTwo}> Counter Two -{counterTwo}</button></div>
    </div>
    )
}
export default Counter;