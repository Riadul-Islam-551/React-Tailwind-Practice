import "./App.css";
import Hero from "./components/Hero/Hero";
import Daisynav from "./components/Navbar/Daisynav";
import Nav from "./components/Navbar/Nav";

function App() {
  return (
    <>
      <Nav></Nav>
      {/* <Daisynav></Daisynav> */}
      <h1 className="text-2xl text-center my-9 font-bold">Start the project</h1>
      <Hero></Hero>
    </>
  );
}

export default App;
