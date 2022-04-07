import audio1 from '../audio/m1.mp3';
import audio2 from '../audio/m2.mp3';

const PAUSE__SONG = 'PAUSE__SONG';
const PLAY__SONG = 'PLAY__SONG';
const CHANGE__SONG = 'CHANGE__SONG';

const initialState = {
	musicList: [
		{
			songName: 'vivi',
			team: 'dreamTeam',
			src: audio1,
		},
		{
			songName: 'say me',
			team: 'state',
			src: audio2,
		},
	],

	nowPlay: '',
	isPause: true,
};

export const music = (state = initialState, action) => {
	switch (action.type) {
		case PAUSE__SONG:
			return { ...state, isPause: false };
		case PLAY__SONG:
			return { ...state, isPause: true };
		case CHANGE__SONG:
			return { ...state, nowPlay: action.src };
		default:
			return state;
	}
};

export const changeSong = src => {
	return {
		type: CHANGE__SONG,
		src,
	};
};
export const pauseSong = () => {
	return {
		type: PAUSE__SONG,
	};
};
export const playSong = () => {
	return {
		type: PLAY__SONG,
	};
};
