import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Posts from "./pages/PostsPage"
import LoginPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';

import './index.css'
import LogOut from './components/LogOut'
import ProfilePage from './pages/ProfilePage';
import PrivacyPage from './pages/PrivacyPage';
import EditProfilePage from './pages/EditProfilePage';


const App = () => {
  return (
    <div className="land-page">
      <Router>
            <Routes>
              <Route path="/" element={<LoginPage />}></Route>
              <Route path="/posts/*" element={< Posts />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/users/:id" element={<ProfilePage/>}></Route>
              <Route path="/register" element={<SignUpPage />}></Route>
              <Route path="/users/:id/edit" element={<EditProfilePage/>}></Route>
              <Route path="/privacy" element={<PrivacyPage/>}></Route>
              <Route path="/logout" element={<LogOut/>}></Route>
              <Route path="*" element={<LoginPage />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
