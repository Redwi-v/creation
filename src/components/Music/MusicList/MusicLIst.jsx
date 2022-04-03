import style from './musicLIst.module.scss';

import note from '../../../img/icons/note.png';
import logo from '../../../img/logo.png';
import { NavLink } from 'react-router-dom';

const MusicList = props => {
	return (
		<div className={style.block}>
			<NavLink to='mainpage'>
				<img src={logo} alt='logo' className={style.logo} />
			</NavLink>

			<ul className={style.music_list}>
				<li className={style.item}>
					<img className={style.image} src={note} alt='' />
					<div className={style.info}>
						<p className={style.name}>Song Name</p>
						<p className={style.team}>team</p>
					</div>
				</li>
				<li className={style.item}>
					<img className={style.image} src={note} alt='' />
					<div className={style.info}>
						<p className={style.name}>Song Name</p>
						<p className={style.team}>team</p>
					</div>
				</li>
				<li className={style.item}>
					<img className={style.image} src={note} alt='' />
					<div className={style.info}>
						<p className={style.name}>Song Name</p>
						<p className={style.team}>team</p>
					</div>
				</li>
				<li className={style.item}>
					<img className={style.image} src={note} alt='' />
					<div className={style.info}>
						<p className={style.name}>Song Name</p>
						<p className={style.team}>team</p>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default MusicList;
