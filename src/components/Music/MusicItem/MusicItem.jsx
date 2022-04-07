import style from './MusicItem.module.scss';
import note from '../../../img/icons/note.png';

const MusicItem = props => {
	const { songName, team, controls, src } = props;
	const { play } = controls;

	return (
		<li className={style.item}>
			<img
				className={style.image}
				onClick={() => {
					play(src);
				}}
				src={note}
				alt=''
			/>
			<div className={style.info}>
				<p className={style.name}>{songName}</p>
				<p className={style.team}>{team}</p>
			</div>
		</li>
	);
};

export default MusicItem;
