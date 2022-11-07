import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Main } from '../pages/Main';



function MainRoute({setPasswordDigest}) {
  return (
		<BrowserRouter>
			<Routes>
      	<Route path="/" element={<Main />} />
			</Routes>
		</BrowserRouter>
    )
}

export {MainRoute}