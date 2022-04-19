import RenderRoutes from './Routes';
import MenuContainer from './components/Menu/MenuContainer';
import './wickedcss.min.css';

function App() {
	return (
		<div className='App'>
			<MenuContainer />
			<main className='main'>
				{
					/* routes */
					RenderRoutes()
				}
			</main>
		</div>
	);
}

export default App;
