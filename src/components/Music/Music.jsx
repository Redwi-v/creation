import style from './music.module.scss';
import MusicList from './MusicList/MusicLIst';

import record from '../../img/record.png';
import stand from '../../img/forRecords.png';
import needle from '../../img/needle.png';
import { useRef } from 'react';

const Music = props => {
	const { isPlay } = props;
	const podium = useRef(null);

	return (
		<div className={style.music}>
			<div className='container'>
				<div className={style.content}>
					<div className={style.pleer}>
						<div ref={podium} className={`${style.stand} ${isPlay && style.rotate}`}>
							<img className={` ${style.iamge}`} src={stand} alt='' />
							<img className={`${style.record}  ${style.iamge}`} src={record} alt='' />
						</div>
						<div className={`${style.needle} `}>
							<img
								className={`${style.iamge} ${(isPlay && style.needlePlay) || (!isPlay && style.needlePause)}`}
								src={needle}
								alt=''
							/>
						</div>
					</div>
					<MusicList {...props} />
				</div>
			</div>
		</div>
	);
};

export default Music;
