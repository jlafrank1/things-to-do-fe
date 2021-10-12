import "./App.css";
// import {useState, useEffect} from 'react'
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Filters from "./components/Filters";
// import Results from './components/Results'

function App() {
  return (
    <div className="background">
      <main>
        <Intro />
        <Filters />
      </main>
      <Footer />
    </div>
  );
}

export default App;
