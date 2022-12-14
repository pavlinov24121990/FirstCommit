import { Routes, Route, Link, redirect, BrowserRouter } from 'react-router-dom';
import { Welcome } from '../pages/Welcome';
import { NotFoundPage } from '../pages/NotFoundPage';
import { CreateANewAccount } from '../pages/CreateANewAccount';
import { ForgotAccount } from '../pages/ForgotAccount';


function Routee({ setPasswordDigest, passwordDigest }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome passwordDigest={passwordDigest} setPasswordDigest={setPasswordDigest} />} />
        <Route path="CreateANewAccount" element={<CreateANewAccount setPasswordDigest={setPasswordDigest}  passwordDigest={passwordDigest}/>} />
        <Route path="ForgotAccount" element={<ForgotAccount />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export {Routee}