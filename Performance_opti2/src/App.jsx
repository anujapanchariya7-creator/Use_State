import { Suspense  } from "react";
import React from "react";
const Lazy=React.lazy(()=>import('./LazyLoad'))
function App(){
  return ( 
    <div className="App"> 
      <h2>Lazy Loading</h2>
      <Suspense>
      <Lazy/>

      </Suspense>
      </div>
  )
}
export default App;