import style from './musicLIst.module.scss';

import note from '../../../img/icons/note.png';
import logo from '../../../img/logo.png';
import { NavLink } from 'react-router-dom';

import audion from '../../../audio/m1.mp3';
import audion2 from '../../../audio/m2.mp3';
import { useRef } from 'react';

let arr = [audion, audion2];

const MusicList = props => {
	const audio = useRef(null);

	const controls = {
		key: 0,

		paly(src) {
			audio.current.src = src;
			audio.current.play();
		},
	};
	console.log(audio);

	const items = () => {
		return arr.map(i => {
			return <MusicPleer num={i} key={i} />;
		});
	};

	return (
		<div className={style.block}>
			<audio ref={audio}></audio>

			<NavLink to='mainpage'>
				<img src={logo} alt='logo' className={style.logo} />
			</NavLink>

			<ul className={style.music_list}>
				<li className={style.item}>
					<img
						onClick={() => {
							controls.paly(audion);
						}}
						className={style.image}
						src={note}
						alt=''
					/>
					<div className={style.info}>
						<p className={style.name}>{props.num}</p>
						<p className={style.team}>team</p>
					</div>
				</li>
				<li className={style.item}>
					<img
						onClick={() => {
							controls.paly(audion2);
						}}
						className={style.image}
						src={note}
						alt=''
					/>
					<div className={style.info}>
						<p className={style.name}>{props.num}</p>
						<p className={style.team}>team</p>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default MusicList;

const MusicPleer = props => {
	return (
		<li className={style.item}>
			<img className={style.image} src={note} alt='' />
			<div className={style.info}>
				<p className={style.name}>{props.num}</p>
				<p className={style.team}>team</p>
			</div>
		</li>
	);
};
