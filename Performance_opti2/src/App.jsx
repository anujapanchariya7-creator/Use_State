import React, { Suspense } from "react";

const Lazy = React.lazy(() => import("./LazyLoad"));

function App() {
  return (
    <div className="App">
      <h2>Lazy Loading</h2>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Lazy />
      </Suspense>
    </div>
  );
}

export default App;
