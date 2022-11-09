import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Main } from '../pages/Main';
import { useState, useEffect } from "react";



function MainRoute({setPasswordDigest, passwordDigest}) {
  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main setPasswordDigest={setPasswordDigest} passwordDigest={passwordDigest}/>} />
			</Routes>
		</BrowserRouter>
    )
}

export {MainRoute}