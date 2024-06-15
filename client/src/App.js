import './App.css';
import Sidebar from './components/common/Sidebar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import PostJob from './components/pages/PostJob';
import Navbar from './components/common/Navbar';
import Landing from './components/pages/Landing';
import AllJobs from './components/pages/AllJobs';
import Footer from './components/common/Footer';
import { useContext } from 'react';
import { GlobalStateContext } from './contexts/GlobalStateContext';
import DetailedJob from './components/pages/DetailedJob';
import Candidates from './components/pages/Candidates';

function App() {
  const { isLoggedIn } = useContext(GlobalStateContext);

  return (
    <>



      <Router>
        {isLoggedIn &&
          <>
            <Navbar />
            <Sidebar />
          </>
        }
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/postjob" element={<PostJob />} />
          <Route path="/all-jobs" element={<AllJobs />} />
          <Route path="/detailed-job" element={<DetailedJob />} />
          <Route path="/candidates" element={<Candidates />} />
        </Routes>
      </Router>
{isLoggedIn&&
      <Footer />
}



    </>

  );
}

export default App;
