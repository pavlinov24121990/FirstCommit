import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Main } from '../pages/Main';
import { PostComments } from "../pages/PostComments";
import { MainCenter } from '../pages/MainCenter'
import "../css/HardReset.css"
import '../css/Fonts.css'
import '../css/MainSass.scss'
import { About } from "../pages/About";
import { Servise } from "../pages/Servise";
import { Gallery } from "../pages/Gallery";
import { Feedback } from "../pages/Feedback";

function MainRoute({setPasswordDigest, passwordDigest, userName, setUserName}) {
  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main userName={userName} setUserName={setUserName} setPasswordDigest={setPasswordDigest} passwordDigest={passwordDigest} />}>
					<Route index element={<MainCenter setPasswordDigest={setPasswordDigest} passwordDigest={passwordDigest} />}/>
					<Route path="post/:id" element={<PostComments passwordDigest={passwordDigest} />} />
					<Route path="About" element={<About />} />
					<Route path="Servise" element={<Servise userName={userName} setUserName={setUserName} passwordDigest={passwordDigest} setPasswordDigest={setPasswordDigest}/>} />
					<Route path="Gallery" element={<Gallery />} />
					<Route path="Feedback" element={<Feedback/>} />
				</Route>
			</Routes>
		</BrowserRouter>
    )
}

export {MainRoute}