function Counter(){
    const [counterOne,setCounterOne] =useState(0)
    const [counterTwo,setCounterTwo] =useState(0)
    const incrementOne=()=>{

    }

    return(
    <div> 
    <div><button onChange={incrementOne}> Counter One </button></div>
    <div><button> Counter Two </button></div>
    </div>
    )
}
export default Counter;