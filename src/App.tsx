import React from "react";
import { RootProvider } from "./provider/RootProvider";
import { BrowserRouter } from "react-router-dom";

import Layout from "./layout";

function App() {
  return (
    <RootProvider>
      <BrowserRouter>
        <div className="App">
          <Layout />
        </div>
      </BrowserRouter>
    </RootProvider>
  );
}

export default App;
