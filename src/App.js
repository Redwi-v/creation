import RenderRoutes from './Routes';
import MenuContainer from './components/Menu/MenuContainer';

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
