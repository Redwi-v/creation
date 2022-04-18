import { Navigate, Route, Routes } from 'react-router-dom';
//pages
import MainPage from './components/MainPage/MainPage';
import Clothes from './components/Clothes/Clothes';
import Legends from './components/Legends/Legends';
import CraftsContainer from './components/Crafts/CraftsContainer';
import MusicContainer from './components/Music/MusicContainer';

const RenderRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path='/mainpage' element={<MainPage />} />
				<Route path='/clothes' element={<Clothes />} />
				<Route path='/legends' element={<Legends />} />
				<Route path='/music' element={<MusicContainer />} />
				<Route path='/crafts/:id' element={<CraftsContainer />} />
				<Route path='*' element={<Navigate to='/mainpage' replace='true' />} />
			</Routes>
		</div>
	);
};

export default RenderRoutes;
