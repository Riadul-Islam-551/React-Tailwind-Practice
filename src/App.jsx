import { Suspense } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Daisynav from "./components/Navbar/Daisynav";
import Nav from "./components/Navbar/Nav";
import Pricingoptions from "./components/pricingOptions/Pricingoptions";
import MarksChart from "./components/marksChart/MarksChart";

const pricingOption = fetch("pricing.json").then((res) => res.json());

function App() {
  return (
    <>
      <header>
        <Nav></Nav>
        {/* <Daisynav></Daisynav> */}
        <h1 className="text-2xl text-center my-9 font-bold">
          Start the project
        </h1>
        <Hero></Hero>
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <Pricingoptions pricingOption={pricingOption}></Pricingoptions>
        </Suspense>
        <MarksChart></MarksChart>
      </main>
    </>
  );
}

export default App;
