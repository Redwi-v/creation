import style from './musicLIst.module.scss';

import logo from '../../../img/logo.png';
import { NavLink } from 'react-router-dom';

import { useRef } from 'react';
import MusicItem from '../MusicItem/MusicItem';

const MusicList = props => {
	const { musicList, Controls } = props;

	const audio = useRef(null);
	const controls = new Controls(audio);
	// create items for music list
	const renderItems = () => {
		return musicList.map(song => {
			const { songName, team, src } = song;

			return <MusicItem src={src} controls={controls} songName={songName} team={team} key={src} />;
		});
	};

	return (
		<div className={style.block}>
			<audio ref={audio}></audio>

			<NavLink to='mainpage'>
				<img src={logo} alt='logo' className={style.logo} />
			</NavLink>

			<ul className={style.music_list}>{renderItems()}</ul>
		</div>
	);
};

export default MusicList;
