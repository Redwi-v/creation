import style from './music.module.scss';

import record from '../../img/record.png';
import stand from '../../img/forRecords.png';
import needle from '../../img/needle.png';
import standforneedle from '../../img/standForneedle.png';

const Music = props => {
	return (
		<div className=''>
			<div className='container'>
				<img className={`${style.image} ${style.record} ${style.rotate}`} src={record} alt='' />
				<img className={`${style.image} ${style.stand} ${style.rotate}`} src={stand} alt='' />
				<img className={`${style.image} ${style.needle}`} src={needle} alt='' />
				<img className={`${style.image} ${style.standforneedle}`} src={standforneedle} alt='' />
			</div>
		</div>
	);
};

export default Music;
