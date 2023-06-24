import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;
