function Counter(){
    const [counterOne,setCounterOne] =useState(0)
    const [counterTwo,setCounterTwo] =useState(0)
    const incrementOne=()=>{
        setCounterOne(counterOne+1)
    }

    return(
    <div> 
    <div><button onChange={incrementOne}> Counter One -{counterOne}</button></div>
    <div><button onC> Counter Two -{counterTwo}</button></div>
    </div>
    )
}
export default Counter;