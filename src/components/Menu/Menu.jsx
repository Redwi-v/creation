import { NavLink } from 'react-router-dom';
import style from './menu.module.scss';
//images
import note from '../../img/icons/note.png';
import dress from '../../img/icons/dress.png';
import matryoshka from '../../img/icons/matryoshka.png';
import legends from '../../img/icons/legends.png';

const Menu = props => {
	const { menuOpen, menuOpenHendler } = props;
	const changeOpneClass = `${style.items}  ${menuOpen ? style.menuOpen : ''}`;

	return (
		<div className={style.menu}>
			<button onClick={menuOpenHendler} className={`${style.button} ${style.active}`}>
				<span></span>
				<span></span>
				<span></span>
			</button>

			<ul className={changeOpneClass}>
				<li className={style.item}>
					<NavLink className={style.link} to='/music'>
						<img src={note} alt='note-img' />
						<h2>Музыка</h2>
					</NavLink>
				</li>
				<li className={style.item}>
					<NavLink className={style.link} to='/clothes'>
						<img src={dress} alt='dress-img' />
						<h2>Одежда</h2>
					</NavLink>
				</li>
				<li className={style.item}>
					<NavLink className={style.link} to='/crafts'>
						<img src={matryoshka} alt='matryoshka-img' />
						<h2>Изделия</h2>
					</NavLink>
				</li>
				<li className={style.item}>
					<NavLink className={style.link} to='/legends'>
						<img src={legends} alt='legends-img' />
						<h2>Легенды</h2>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};
export default Menu;
