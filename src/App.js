import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="h-screen w-screen bg-background">
        <Navbar />
        <Hero />
      </div>
      
    </div>
  );
}

export default App;
