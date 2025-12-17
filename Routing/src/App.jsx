import React, { useState } from 'react';
function App()
{
  const [page,setPage]=useState("home");

    return(
      <div>
        <button onClick={()=>setPage("home")}>Home</button>
        <button onClick={()=>setPage("about")}>About</button>
        <button onClick={()=>setPage("contact")}>Contact</button>
      </div>
    )
    

}
export default App;