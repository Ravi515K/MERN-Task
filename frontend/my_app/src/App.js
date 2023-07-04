
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import UserLoginPage from './Pages/UserLoginpage';
import AdminLoginPage from './Pages/AdminLoginPage';
import TaskCreate from './Pages/TaskCreate';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/user/login" element={<UserLoginPage/>}></Route>
        <Route path="/admin/login" element={<AdminLoginPage/>}></Route>
        <Route path="/task" element={   <TaskCreate />}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
