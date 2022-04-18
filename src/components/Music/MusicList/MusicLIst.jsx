import style from './musicLIst.module.scss';

import { useRef } from 'react';
import MusicItem from '../MusicItem/MusicItem';
import Logo from '../../Logo/Logo';

const MusicList = props => {
	const { musicList, Controls, nowPlay, isPlay, progress } = props;

	const audio = useRef(null);
	const controls = new Controls(audio);

	// create items for music list
	const renderItems = () => {
		return musicList.map(song => {
			const { songName, team, src } = song;
			return (
				<MusicItem
					nowPlay={nowPlay}
					progress={progress}
					isPlay={isPlay}
					src={src}
					controls={controls}
					songName={songName}
					team={team}
					key={src}
				/>
			);
		});
	};

	return (
		<div className={style.block}>
			<audio ref={audio}></audio>

			<Logo className={style.logo} />

			<ul className={style.music_list}>{renderItems()}</ul>
		</div>
	);
};

export default MusicList;
