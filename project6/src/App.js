import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Wrapper from './components/Wrapper';
import NoPage from './Pages/NoPage';

function App() {
  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Wrapper />} >
            <Route index element={<HomePage />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="About" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
