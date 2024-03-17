import LandingPage from "./components/LandingPage";
import Signup from "./components/signup";
import Login from "./components/Login";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const App = () =>{
  return(
    <Router>
    
    <div>
    <Routes>
      <Route path='/Login' element= {<Login/>}/>
      <Route path='/Signup' element= {<Signup/>}/>
      </Routes>
      </div>
  
      </Router>
  );
}

export default App;