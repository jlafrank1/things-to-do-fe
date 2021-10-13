import "./App.css";
// import {useState, useEffect} from 'react'
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Filters from "./components/Filters";
// import Results from './components/Results'
import Nav from "./components/Nav";

function App() {
  return (
    <div className="background">
      <main>
        <Nav />
        <Intro />
        <Filters />
      </main>
      <Footer />
    </div>
  );
}

export default App;
