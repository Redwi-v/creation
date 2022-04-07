import { connect } from 'react-redux';
import { changeSong, pauseSong, playSong } from '../../redux/music';
import Music from './Music';

const MusicContainer = props => {
	const {
		isPause,
		nowPlay,
		//actions
		changeSong,
		pauseSong,
		playSong,
	} = props;

	class Controls {
		constructor(audio) {
			this.audio = audio;
		}

		play = src => {
			if (nowPlay === '' || (src === nowPlay && !isPause) || src !== nowPlay) {
				this.audio.current.src = src;
				playSong();
				changeSong(src);
				this.audio.current.play();
			} else {
				pauseSong();
				this.audio.current.pause();
			}
		};
	}

	return <Music {...props} Controls={Controls} />;
};

const mapStateToProps = state => {
	return {
		musicList: state.music.musicList,
		nowPlay: state.music.nowPlay,
		isPause: state.music.isPause,
	};
};

const mapDispatchToProps = { changeSong, pauseSong, playSong };

export default connect(mapStateToProps, mapDispatchToProps)(MusicContainer);
