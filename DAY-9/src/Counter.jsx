function Counter(){
    const [counterOne,setCounterOne] =useState(0)
    const [counterTwo,setCounterTwo] =useState(0)
    const incrementOne=()=>{
        setCounterOne(counterOne+1)
    }
    const incrementTwo=()=>{
        setCounterTwo(counterTwo+1)
    }
    const isEven=()=>{
        return counterOne%2==0
    }

    return(
    <div> 
    <div><button onClick={incrementOne}> Counter One -{counterOne}</button>
    <span> {isEven()?'Even': 'odd' }</span>
    
    </div>
    <div><button onClick={incrementTwo}> Counter Two -{counterTwo}</button></div>
    </div>
    );
}
export default Counter;