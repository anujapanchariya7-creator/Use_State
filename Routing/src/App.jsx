
function App()
{
  const [page,setPage]=useState("home")

    return(
      <div>
        <button onClick={()=>setPage("home")}>Home</button>
    )
    

}
export default App;