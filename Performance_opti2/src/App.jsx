import { Suspense } from "react";

const Lazy=React.lazy(()=>import(./LazyLoad))
function App(){
  return ( 
    <div className="App"> 
      <h2>Lazy Loading</h2>
      <Suspense>
      <></>

      </Suspense>
      </div>
  )
}
export default App;