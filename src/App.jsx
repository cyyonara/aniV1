import { Routes, Route } from 'react-router-dom';
import RootLayout from './shared/layout/RootLayout';
import Home from './pages/Home';
import Summary from './pages/Summary';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<RootLayout />} />
        <Route path='/home' element={<Home />} />
        <Route path='/summary/:id' element={<Summary />} />
      </Routes>
    </div>
  );
}

export default App