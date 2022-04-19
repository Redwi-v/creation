import { NavLink } from 'react-router-dom';

import './mainPage.scss';

//img
import logo from '../../img/logo.png';
import attributes from '../../img/attributes.png';
import musicians from '../../img/musicians.png';
import lines from '../../img/lines.png';
import ClothesImage from '../../img/ClothesImage.png';
import products from '../../img/products.png';
import legends from '../../img/legends.png';

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
								<NavLink to='/music'>
									<h2 className='info-block__title title'>Музыка</h2>
								</NavLink>
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
							<div className='imageContainer'>
								<img src={ClothesImage} alt='ClothesImage' className='info-block__image' />
							</div>

							<div className='info-block__text'>
								<NavLink to='/clothes'>
									<h2 className='info-block__title title'>Одежда</h2>
								</NavLink>
								<p className='info-block__discription'>
									Единого образца русского национального костюма не существовало. Его вариативность определялась
									огромными просторами страны, различными климатическими зонами, историей, экономикой каждого края,
									местными культурными традициями, миграцией населения, влиянием проживающих по соседству народов.
									Костюмы людей из одной сельской местности различались также по их возрастным и социальным признакам,
									вероисповеданию и ряду других факторов. Так, существовало обязательное различие в одежде детей,
									неженатой и женатой молодежи, людей детородного возраста и стари­ков, а также солдаток, вдов и других.
								</p>
							</div>
						</div>
					</div>
					<img className='lines' src={lines} alt='lines' />
				</div>
				<div className='info-block'>
					<div className='container'>
						<div className='info-block__wraper'>
							<img src={products} alt='musicians' className='info-block__image' />

							<div className='info-block__text'>
								<NavLink to='/crafts/1'>
									<h2 className='info-block__title title'>Изделия</h2>
								</NavLink>
								<p className='info-block__discription'>
									Народные промыслы — это именно то, что делает нашу культуру богатой и неповторимой. Расписные
									предметы, игрушки и изделия из ткани увозят с собой иностранные туристы в память о нашей стране. Почти
									каждый уголок России имеет собственный вид рукоделия.
								</p>
							</div>
						</div>
					</div>
					<img className='lines' src={lines} alt='lines' />
				</div>
				<div className='info-block'>
					<div className='container'>
						<div className='info-block__wraper'>
							<img src={legends} alt='legends' className='info-block__image' />

							<div className='info-block__text'>
								<NavLink to='/legends'>
									<h2 className='info-block__title title'>Легенды</h2>
								</NavLink>
								<p className='info-block__discription'>
									Русские былины и легенды - произведения русского фольклора, в которых юные и взрослые читатели увидят
									быт простого человека прошлых веков без прикрас. Былинный эпос и легенды представят юному читателю
									обычных людей, богатырей, божеств и князей Древней Руси. Знакомьте ребенка с народным творчеством,
									чтобы он смог приобщиться к быту людей в «старинушку», понять мотивы поступков наших предков и
									искренне полюбить свою Родину.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer className='footer'>
				<div className='container'>
					<NavLink className='footer__link' to='/about'>
						О сaйте
					</NavLink>
				</div>
			</footer>
		</div>
	);
};

export default MainPage;
