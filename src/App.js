import "./App.css";
import React, { Suspense } from "react";
import LeftSide from "./containers/LeftSide";
const RightSide = React.lazy(() => import("./containers/RightSide"));
import CountryState from "./context/CountryState";
import { ReactComponent as Loader } from "./assets/Loader.svg";

function App() {
  return (
    <CountryState>
      <div className="app">
        <LeftSide />
        <Suspense fallback={<Loader />}>
          <RightSide />
        </Suspense>
      </div>
    </CountryState>
  );
}

export default App;
