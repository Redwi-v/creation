import Logo from '../Logo/Logo';
// images
import js from '../../img/icons/js.png';
import html from '../../img/icons/html.png';
import scss from '../../img/icons/scss.png';
import react from '../../img/icons/react.png';
import redux from '../../img/icons/redux.jpg';
import npm from '../../img/icons/npm.png';
import git from '../../img/icons/gitGitHub.webp';
import vsCode from '../../img/icons/vsCode.jpg';

import style from './about.module.scss';

const About = props => {
	return (
		<div className=''>
			<div className='container slideRight'>
				<Logo className={style.logo} />
				<div className={style.persons}>
					<div className={style.person}>
						<span>Автор: </span> <a href='https://vk.com/animesn1k'> Кайсин Андрей</a>
					</div>
				</div>
				<div className={style.persons}>
					<div className={style.person}>
						<span>Руководитель проекта: </span> <a href='https://vk.com/l_ivan_8792'> Иван Лазарев</a>
					</div>
				</div>
				<h3 className={style.title}>Технологии</h3>
				<div className={style.tools + 'zoomer'}>
					<div className={style.native}>
						<Tool img={js} href='https://www.javascript.com/' />
						<span>+</span>
						<Tool img={html} href='http://htmlbook.ru/html' />
						<span>+</span>
						<Tool img={scss} href='https://sass-scss.ru/' />
					</div>
					<div className={style.maynStack}>
						<Tool img={react} href='https://ru.reactjs.org/' />
						<span>+</span>
						<Tool img={redux} href='https://react-redux.js.org/' />
					</div>
					<h3 className={style.dopToolsTitle}>Инструменты</h3>
					<div className={style.dopTools}>
						<Tool img={npm} href='https://www.npmjs.com/' />
						<span>+</span>
						<Tool img={git} href='https://github.com/' className={style.git} />
						<span>+</span>
						<Tool img={vsCode} href='https://code.visualstudio.com/' />
					</div>
					<div className={style.dopLibrarys}>
						<h3>Дополнительные библиотеки</h3>
						<div>
							<a href='https://react-slick.neostack.com/'>React Slick</a>
						</div>
						<div>
							<a href='http://kristofferandreasen.github.io/wickedCSS/#'>Wicked CSS</a>
						</div>
					</div>
				</div>
				<h3>Источники информации</h3>
				<ul className={style.list}>
					<li className={style.item}>
						<a
							className={style.link}
							href='https://fishki.net/1255416-16-samyh-krasivyh-vidov-narodnogo-iskusstva-rossii.html?'>
							Изделия-1
						</a>
					</li>
					<li className={style.item}>
						<a className={style.link} href='https://ruvera.ru/narodnye_promysly'>
							Изделия-2
						</a>
					</li>

					<li className={style.item}>
						<a
							className={style.link}
							href='https://folkberry.ru/ponyova-tradicionnyj-ehlement-zhenskoj-odezhdy-na-rusi'>
							Одежда-1
						</a>
					</li>
					<li className={style.item}>
						<a
							className={style.link}
							href='https://www.culture.ru/materials/51485/po-odezhke-vstrechayut?ysclid=l26g72u5ar'>
							Одежда-2
						</a>
					</li>

					<li className={style.item}>
						<a
							className={style.link}
							href='https://publicadomain.ru/folklore/russkie-narodnye-legendy/blagochestivaya-zhena '>
							Легенды-1
						</a>
					</li>

					<li className={style.item}>
						<a className={style.link} href='https://nukadeti.ru/skazki/russkie_byliny_i_legendy '>
							Легенды-2
						</a>
					</li>

					<li className={style.item}>
						<a
							className={style.link}
							href='https://ru.drivemusic.me/narodnie/65545-boris-gmyrja-polno-polno-vam-rebjata.html '>
							Музыка-1
						</a>
					</li>

					<li className={style.item}>
						<a className={style.link} href='https://stand.hitplayer.ru'>
							Музыка-2
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default About;

const Tool = props => {
	const { img, href = '#', className } = props;

	return (
		<div className={`${style.tool} ${className}`}>
			<a href={href}>
				<img src={img} alt='' />
			</a>
		</div>
	);
};
