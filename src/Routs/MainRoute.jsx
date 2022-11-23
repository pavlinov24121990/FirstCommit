import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Main } from '../pages/Main';
import { PostComments } from "../pages/PostComments";
import { MainCenter } from '../pages/MainCenter'
import "../css/HardReset.css"
import '../css/Fonts.css'
import '../css/MainSass.scss'
import { About } from "../pages/About";

function MainRoute({setPasswordDigest, passwordDigest}) {
  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main setPasswordDigest={setPasswordDigest} passwordDigest={passwordDigest} />}>
					<Route index element={<MainCenter setPasswordDigest={setPasswordDigest} passwordDigest={passwordDigest} />}/>
					<Route path="post/:id" element={<PostComments passwordDigest={passwordDigest} />} />
					<Route path="About" element={<About/>} />
				</Route>
			</Routes>
		</BrowserRouter>
    )
}

export {MainRoute}