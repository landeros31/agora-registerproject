import AddProject from "./components/addForm/AddForm";
import { GetProject } from "./vistaP/GetProject";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 

function App() {
  return (

    
        <Router>
          <Routes>
          <Route path='/' element={<AddProject/>} />  
          <Route path='/getprojects' element={<GetProject/>} />         
       
          </Routes>
        </Router>
          
    
  );
}

export default App;
