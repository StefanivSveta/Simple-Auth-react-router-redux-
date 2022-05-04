import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage';
import ProfilePage from "./components/ProfilePage/ProfilePage";

import './index.css'

function App() {
  const state = useSelector((state) => state.auth);

  return (
    <div>    
        <Routes>
          <Route path='/profile' element={<ProfilePage login={state.login}/>} />
          <Route path='/' element={<LoginPage />} />
        </Routes>     
    </div>
  );
}

export default App;
