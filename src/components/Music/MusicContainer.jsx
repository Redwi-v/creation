import { connect } from 'react-redux';
import { changeSong, pauseSong, playSong, updateProgress } from '../../redux/music';
import Music from './Music';

const MusicContainer = props => {
	const {
		isPlay,
		nowPlay,
		//actions
		changeSong,
		pauseSong,
		playSong,
		updateProgress,
	} = props;

	class Controls {
		constructor(audio) {
			this.audio = audio;

			this.addEvent();
		}

		play = src => {
			if (src === nowPlay && isPlay) {
				pauseSong();
				this.audio.current.pause();
			} else {
				updateProgress(0);
				changeSong(src);
				this.audio.current.src = src;
				playSong();
				this.audio.current.play();
			}
		};

		addEvent = () => {
			if (this.audio.current) {
				this.audio.current.addEventListener('timeupdate', this.updateTime);
			}
		};

		updateTime(e) {
			const { duration, currentTime } = e.srcElement;
			const procent = (currentTime / duration) * 100;
			updateProgress(procent);
		}

		setProgress(e) {
			const width = e.target.offsetWidth;
			const clickX = e.nativeEvent.offsetX;
			const duretion = this.audio.current.duration;
			this.audio.current.currentTime = (clickX / width) * duretion;
		}
	}

	return <Music {...props} Controls={Controls} />;
};

const mapStateToProps = state => {
	return {
		musicList: state.music.musicList,
		nowPlay: state.music.nowPlay,
		isPlay: state.music.isPlay,
		progress: state.music.progress,
	};
};

const mapDispatchToProps = { changeSong, pauseSong, playSong, updateProgress };

export default connect(mapStateToProps, mapDispatchToProps)(MusicContainer);
