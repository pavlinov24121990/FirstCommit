
import './HardReset.css';
import './Fonts.css';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Welcome } from './pages/Welcome';
import { NotFoundPage } from './pages/NotFoundPage';
import { CreateANewAccount } from './pages/CreateANewAccount';
import { ForgotAccount } from './pages/ForgotAccount';

function App() {




  return (
    
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="CreateANewAccount" element={<CreateANewAccount />} />
        <Route path="ForgotAccount" element={<ForgotAccount />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  
    
  );
}

export default App;
