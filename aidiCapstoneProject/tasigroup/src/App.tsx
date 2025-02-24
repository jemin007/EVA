
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Tools from './pages/Tools';
import Share from './pages/Share';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/share" element={<Share />} />
          <Route path="/intro" element={<Share />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;