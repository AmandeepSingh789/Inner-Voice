import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import SignIn from "./routes/SignIn";


import {Link} from 'react-scroll';
function App() {
  return (
    <div className="App">
      <div >
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
          </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
