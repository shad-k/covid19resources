import React from "react";

import Jumbo from "./components/Jumbo";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import FAQ from "./components/FAQ";
import Trackers from "./components/Trackers";
import Research from "./components/Research";
import MythBusters from "./components/MythBusters";
import India from "./components/India";
import Other from "./components/Other";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Jumbo />
        <Tabs />
        <FAQ />
        <Trackers />
        <Research />
        <MythBusters />
        <India />
        <Other />
        <Footer />
      </main>
    </>
  );
};

export default App;
