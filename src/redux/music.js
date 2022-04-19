import Vhorovode from '../audio/Вхороводе.mp3';
import polno_polno_vam_rebjata from '../audio/polno-polno-vam-rebjata.mp3';
import moskva_zlatoglavaja from '../audio/moskva-zlatoglavaja.mp3';
import u_golubja_u_sizogo from '../audio/u-golubja-u-sizogo.mp3';
import belilicy from '../audio/belilicy.mp3';

const PAUSE__SONG = 'PAUSE__SONG';
const PLAY__SONG = 'PLAY__SONG';
const CHANGE__SONG = 'CHANGE__SONG';
const UPDATE__PROGRESS = 'UPDATE__PROGRESS';

const initialState = {
	musicList: [
		{
			songName: 'В хороводе',
			team: 'Ансамбль "калинка"',
			src: Vhorovode,
		},
		{
			songName: 'Полно, Полно Вам, Ребята',
			team: 'Борис Гмыря',
			src: polno_polno_vam_rebjata,
		},
		{
			songName: 'Москва Златоглавая',
			team: 'Анна Литвиненко',
			src: moskva_zlatoglavaja,
		},
		{
			songName: 'Белилицы',
			team: 'Людмила Зыкина',
			src: u_golubja_u_sizogo,
		},
		{
			songName: 'У Голубя, У Сизого',
			team: 'Елена Кутузова',
			src: belilicy,
		},
	],

	nowPlay: '',
	isPlay: false,
	progress: 0,
};

export const music = (state = initialState, action) => {
	switch (action.type) {
		case PAUSE__SONG:
			return { ...state, isPlay: false };
		case PLAY__SONG:
			return { ...state, isPlay: true };
		case CHANGE__SONG:
			return { ...state, nowPlay: action.src };
		case UPDATE__PROGRESS:
			return { ...state, progress: action.progress };
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

export const updateProgress = progress => {
	return {
		type: UPDATE__PROGRESS,
		progress,
	};
};
