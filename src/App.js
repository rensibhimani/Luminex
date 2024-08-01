import './App.css';
import './components/css/responsive.css';
import './components/css/style.css';

import Footer from './components/Footer';
import Home from './components/Home/Home';
import Ketamine_therapy from './components/Ketamine_therapy';
import Mental_health from './components/Mental_health';
import Navbar from './components/Navbar';
import Personal_coaching from './components/Personal_coaching';
import Primary_care from './components/Primary_care';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Weight_loss from './components/Weight_loss';
import Hormones_women from './components/Hormones_women';
import Hormones_men from './components/Hormones_men';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/patient_portal' element={<Register />} />
          <Route path='/primary-care' element={<Primary_care />} />
          <Route path='/mental-health' element={<Mental_health />} />
          <Route path='/weight-loss' element={<Weight_loss />} />
          <Route path='/hormones_women' element={<Hormones_women />} />
          <Route path='/hormones_men' element={<Hormones_men />} />
          <Route path='/ketamine-therapy' element={< Ketamine_therapy />} />
          <Route path='/personal-coaching' element={<Personal_coaching />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
