import './App.css';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import Posts from "./pages/PostsPage"
import LoginPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import LogOut from './components/LogOut'
import ProfilePage from './pages/ProfilePage';
import PrivacyPage from './pages/PrivacyPage';

const App = () => {
  // let {id} = useParams();

  return (
    <div className="land-page">
      <Router>
            <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/posts" element={< Posts />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/users/:id" element={<ProfilePage/>}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/privacy" element={<PrivacyPage/>}></Route>
            <Route path="/logout" element={<LogOut/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
