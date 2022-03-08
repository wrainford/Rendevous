import './App.css';
import './index.css'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Posts from "./pages/PostsPage"
import LoginPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import PrivacyPage from './pages/PrivacyPage';
import EditProfilePage from './pages/EditProfilePage';
import LogOut from './components/LogOut'
import * as authService from './api/auth.service';

const App = () => {
 const [isLoggedIn, setIsLoggedIn] = useState();
  const userActive = () => {
    if(authService.currentUser()){
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }

  useEffect(() => {
    userActive();
  }, []);
  
  return (
    <div className="land-page">
      <Router>
            <Routes>
              <Route path="/" element={isLoggedIn ? <Posts /> : <SignUpPage/>}/>
              <Route path="/posts/*" element={isLoggedIn ? <Posts /> : <LoginPage />}/>
              <Route path="/login" element={isLoggedIn ? <Posts /> : <LoginPage />}/>
              <Route path="/users/:id" element={isLoggedIn ? <ProfilePage/> : <SignUpPage />}/>
              <Route path="/register" element={<SignUpPage />}/>
              <Route path="/users/:id/edit" element={isLoggedIn ? <EditProfilePage/> : <SignUpPage />}/>
              <Route path="/privacy" element={isLoggedIn ? <PrivacyPage/> : <SignUpPage />}/>
              <Route path="/logout" element={<LogOut/>}/>
              <Route path="*" element={<LoginPage />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
