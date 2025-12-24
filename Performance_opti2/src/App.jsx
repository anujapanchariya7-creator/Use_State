import LazyLoad from "./Component/LazyLoad";
const Lazy=React.lazy(())
function App(){
  return ( 
    <div className="App"> 
      <h2>Lazy Loading</h2>
      <LazyLoad/>
      
      
      </div>
  )
}
export default App;