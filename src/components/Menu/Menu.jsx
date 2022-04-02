import { NavLink } from 'react-router-dom';
import style from './menu.module.scss';

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
					<NavLink className={style.link} to='/music'></NavLink>
				</li>
				<li className={style.item}>
					<NavLink className={style.link} to='/clothes'></NavLink>
				</li>
				<li className={style.item}>
					<NavLink className={style.link} to='/crafts'></NavLink>
				</li>
				<li className={style.item}>
					<NavLink className={style.link} to='/legends'></NavLink>
				</li>
			</ul>
		</div>
	);
};
export default Menu;
