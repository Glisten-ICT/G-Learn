import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginform from "./components/Loginform/loginform";
import Home from "./components/Home/home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Loginform />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;