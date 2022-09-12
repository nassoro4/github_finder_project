import React from 'react';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Alert from './components/pages/Alert';
import User from './components/pages/User';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GitHubContextProvider } from './components/context/gitHub/GitHubContext';
import { AlertContextProvider } from './components/context/alert/AlertContext';
import ReposList from './components/repos/ReposList';
function App() {
  return (
    <AlertContextProvider>
      <GitHubContextProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/NotFound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/user/:login" element={<User />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </GitHubContextProvider>
    </AlertContextProvider>
  );
}

export default App;
