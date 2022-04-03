import { Navigate, Route, Routes } from 'react-router-dom';
//pages
import MainPage from './components/MainPage/MainPage';
import Clothes from './components/Clothes/Clothes';
import Legends from './components/Legends/Legends';
import Music from './components/Music/Music';
import Crafts from './components/Crafts/Crafts';

const RenderRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path='/mainpage' element={<MainPage />} />
				<Route path='/clothes' element={<Clothes />} />
				<Route path='/legends' element={<Legends />} />
				<Route path='/music' element={<Music />} />
				<Route path='/crafts' element={<Crafts />} />
				<Route path='*' element={<Navigate to='/mainpage' replace='true' />} />
			</Routes>
		</div>
	);
};

export default RenderRoutes;
