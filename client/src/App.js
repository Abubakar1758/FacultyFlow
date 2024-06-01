import './App.css';
import Sidebar from './components/common/Sidebar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import PostJob from './components/pages/PostJob';
import Navbar from './components/common/Navbar';
import Landing from './components/pages/Landing';


function App() {
  return (
    <>
      {/* <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/postjob" element={<PostJob />} />
          
        </Routes>
      </Router> */}
      
<Landing/>
    </>

  );
}

export default App;
