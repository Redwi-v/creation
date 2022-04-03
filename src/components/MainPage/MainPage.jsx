import './mainPage.scss';

//img
import logo from '../../img/logo.png';
import attributes from '../../img/attributes.png';
import musicians from '../../img/musicians.png';
import lines from '../../img/lines.png';

const MainPage = props => {
	return (
		<div className='mainPage'>
			<div className='greetings'>
				<div className='container'>
					<img src={logo} alt='logo' className='greetings__logo' />
					<div className='greetings__wraper'>
						<p className='greetings__discription'>
							Путеводитель по народному <span className='greetings__color-green'>творчеству</span> России
						</p>
						<img src={attributes} alt='attributes' className='greetings__attributes' />
					</div>
				</div>
			</div>
			<div className='info'>
				<div className='info-block'>
					<div className='container'>
						<div className='info-block__wraper'>
							<img src={musicians} alt='musicians' className='info-block__image' />

							<div className='info-block__text'>
								<h2 className='info-block__title title'>Музыка</h2>
								<p className='info-block__discription'>
									Истоки русской народной музыки восходят к фольклору славянских племен, которые жили на территории
									Киевской Руси, первого русского государства, сложившегося в 10 в. Русская народная музыка не была
									однородна, как не были однородны племена, составлявшие Киевскую Русь; кроме славянских, она включала в
									себя финно-угорские, тюркские и другие прототипы.
								</p>
							</div>
						</div>
					</div>
					<img className='lines' src={lines} alt='lines' />
				</div>
				<div className='info-block'>
					<div className='container'>
						<div className='info-block__wraper'>
							<img src={musicians} alt='musicians' className='info-block__image' />

							<div className='info-block__text'>
								<h2 className='info-block__title title'>Музыка</h2>
								<p className='info-block__discription'>
									Истоки русской народной музыки восходят к фольклору славянских племен, которые жили на территории
									Киевской Руси, первого русского государства, сложившегося в 10 в. Русская народная музыка не была
									однородна, как не были однородны племена, составлявшие Киевскую Русь; кроме славянских, она включала в
									себя финно-угорские, тюркские и другие прототипы.
								</p>
							</div>
						</div>
					</div>
					<img className='lines' src={lines} alt='lines' />
				</div>
				<div className='info-block'>
					<div className='container'>
						<div className='info-block__wraper'>
							<img src={musicians} alt='musicians' className='info-block__image' />

							<div className='info-block__text'>
								<h2 className='info-block__title title'>Музыка</h2>
								<p className='info-block__discription'>
									Истоки русской народной музыки восходят к фольклору славянских племен, которые жили на территории
									Киевской Руси, первого русского государства, сложившегося в 10 в. Русская народная музыка не была
									однородна, как не были однородны племена, составлявшие Киевскую Русь; кроме славянских, она включала в
									себя финно-угорские, тюркские и другие прототипы.
								</p>
							</div>
						</div>
					</div>
					<img className='lines' src={lines} alt='lines' />
				</div>
				<div className='info-block'>
					<div className='container'>
						<div className='info-block__wraper'>
							<img src={musicians} alt='musicians' className='info-block__image' />

							<div className='info-block__text'>
								<h2 className='info-block__title title'>Музыка</h2>
								<p className='info-block__discription'>
									Истоки русской народной музыки восходят к фольклору славянских племен, которые жили на территории
									Киевской Руси, первого русского государства, сложившегося в 10 в. Русская народная музыка не была
									однородна, как не были однородны племена, составлявшие Киевскую Русь; кроме славянских, она включала в
									себя финно-угорские, тюркские и другие прототипы.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer className='footer'>
				<div className='container'>
					<p>Autor: Далеко-далеко</p>
				</div>
			</footer>
		</div>
	);
};

export default MainPage;
