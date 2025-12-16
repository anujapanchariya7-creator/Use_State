import React, { use, useEffect } from 'react';
function FirstComponent() {


  const [count, setCount] = useState(0);

//side


  return (<div> 
    <h2>{count}</h2>
    <button onClick={()=>setCount(count+1)}
      >Add</button>
  </div>)
}

export default FirstComponent;
