import React from "react";

import Jumbo from "./components/Jumbo";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import FAQ from "./components/FAQ";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Jumbo />
        <Tabs />
        <FAQ />
      </main>
    </>
  );
};

export default App;
