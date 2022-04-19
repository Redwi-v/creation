import style from './info.module.scss';

import tray from '../../../img/photos/tray.jpg';
import { useParams } from 'react-router-dom';

const Info = props => {
	const { items } = props;

	const id = +useParams().id;
	let renderel;

	items.forEach(el => {
		if (el.id === id) renderel = el;
	});

	return (
		<div className={style.info + ' fadeIn'}>
			<div className={style.image}>
				<img src={renderel.image} alt='tray' />
			</div>
			<div className={style.text}>
				<h2 className={style.title}>{renderel.title} </h2>
				{renderel.text}
			</div>
		</div>
	);
};

export default Info;
