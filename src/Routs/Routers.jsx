import { Routes, Route, Link, redirect, BrowserRouter } from 'react-router-dom';
import { Welcome } from '../pages/Welcome';
import { NotFoundPage } from '../pages/NotFoundPage';
import { CreateANewAccount } from '../pages/CreateANewAccount';
import { ForgotAccount } from '../pages/ForgotAccount';
import { useState } from "react";




function Routee({setPasswordDigest}) {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome setPasswordDigest={setPasswordDigest} />} />
          <Route path="CreateANewAccount" element={<CreateANewAccount />} />
          <Route path="ForgotAccount" element={<ForgotAccount />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    )
}

export {Routee}