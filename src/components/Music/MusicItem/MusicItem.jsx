import { useEffect, useRef } from 'react';
import style from './MusicItem.module.scss';

const MusicItem = props => {
	const { songName, team, controls, src, nowPlay, isPlay, progress } = props;
	const { play } = controls;

	const imPlay = isPlay && src === nowPlay;

	const progressBar = useRef(null);

	useEffect(() => {
		progressBar.current.style.width = progress + '%';
	});

	function setProgress(e) {
		controls.setProgress(e);
	}

	return (
		<li className={`${style.item} ${imPlay && style.play} slideLeft`}>
			<div
				className={`${style.image}`}
				onClick={() => {
					play(src);
				}}></div>
			<div className={style.info}>
				<p className={style.name}>{songName}</p>
				<p className={style.team}>{team}</p>
				<div onClick={setProgress} className={style.progressContainer}>
					<div ref={progressBar} className={style.progress}></div>
				</div>
			</div>
		</li>
	);
};

export default MusicItem;
