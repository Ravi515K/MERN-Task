
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import UserLoginPage from './Pages/UserLoginpage';
import TaskCreate from './Pages/TaskCreate';
import AdminDashboard from './Pages/AdminDashboard';
import Userdashboard from './Pages/Userdashboard';
import RequiredAuth from './hoc/RequiredAuth';
import UpadateTask from './component/UpdateTask';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<UserLoginPage/>}></Route>
        <Route path="/task" element={ <RequiredAuth>  <TaskCreate /> </RequiredAuth> }></Route>
        <Route path="/update/:id" element={<RequiredAuth>  <UpadateTask /> </RequiredAuth>  }/>
        <Route path="/admin" element={<RequiredAuth> <AdminDashboard /> </RequiredAuth>  }></Route>
        <Route path="/user" element={ <RequiredAuth> <Userdashboard /> </RequiredAuth>  }></Route>
      </Routes>
   
    </div>
  );
}

export default App;
