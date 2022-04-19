import { Navigate, Route, Routes } from 'react-router-dom';
//pages
import MainPage from './components/MainPage/MainPage';
import Clothes from './components/Clothes/Clothes';
import LegendsContainer from './components/Legends/LegendsContainer';
import CraftsContainer from './components/Crafts/CraftsContainer';
import MusicContainer from './components/Music/MusicContainer';
import About from './components/About/About';

const RenderRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path='/mainpage' element={<MainPage />} />
				<Route path='/clothes' element={<Clothes />} />
				<Route path='/legends' element={<LegendsContainer />} />
				<Route path='/music' element={<MusicContainer />} />
				<Route path='/crafts/:id' element={<CraftsContainer />} />
				<Route path='/about' element={<About />} />
				<Route path='*' element={<Navigate to='/mainpage' replace='true' />} />
			</Routes>
		</div>
	);
};

export default RenderRoutes;
