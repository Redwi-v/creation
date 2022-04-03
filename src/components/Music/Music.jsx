import style from './music.module.scss';
import MusicList from './MusicList/MusicLIst';

import record from '../../img/record.png';
import stand from '../../img/forRecords.png';
import needle from '../../img/needle.png';

const Music = props => {
	return (
		<div className=''>
			<div className='container'>
				<div className={style.content}>
					<div className={style.pleer}>
						<div className={style.stand}>
							<img className={`${style.rotate} ${style.iamge}`} src={stand} alt='' />
							<img className={`${style.record} ${style.rotate} ${style.iamge}`} src={record} alt='' />
						</div>
						<div className={style.needle}>
							<img className={style.iamge} src={needle} alt='' />
						</div>
					</div>
					<MusicList />
				</div>
			</div>
		</div>
	);
};

export default Music;
