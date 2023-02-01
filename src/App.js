import Moive from "./components/Movie";
import { dummy } from "./moiveDummy";
import {BrowserRouter,Routes,Route,RouteProvider} from 'react-router-dom';
import HomePage from './Home'
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
