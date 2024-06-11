import './App.css';
import Sidebar from './components/common/Sidebar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import PostJob from './components/pages/PostJob';
import Navbar from './components/common/Navbar';
import Landing from './components/pages/Landing';
import AllJobs from './components/pages/AllJobs';
import Footer from './components/common/Footer';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/postjob" element={<PostJob />} />
          <Route path="/alljobs" element={<AllJobs />} />
        </Routes>
      </Router>
      
      <Footer/>

    </>

  );
}

export default App;
