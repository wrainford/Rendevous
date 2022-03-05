import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./pages/HomePage"
import LoginPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';

const App = () => {
  return (
    <div className="land-page">
      <Router>
        <nav>
          <Link to="/login">Log In</Link>
          <Link to="signup">Sign Up</Link>
        </nav>
          <Routes>
            <Route path="/" element={<Home />}>Home</Route>
            <Route path="/login" element={<LoginPage />}> Log in</Route>
            <Route path="/signup" element={<SignUpPage /> }>Sign Up</Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
