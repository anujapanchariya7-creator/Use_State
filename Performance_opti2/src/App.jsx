
const Lazy=React.lazy(()=>import(./LazyLoad))
function App(){
  return ( 
    <div className="App"> 
      <h2>Lazy Loading</h2>
      <LazyLoad/>
      
      
      </div>
  )
}
export default App;