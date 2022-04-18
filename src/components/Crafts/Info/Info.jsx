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
		<div className={style.info}>
			<div className={style.image}>
				<img src={tray} alt='tray' />
			</div>
			<div className={style.text}>
				<span>{renderel.title} </span> ipsum, dolor sit amet consectetur adipisicing elit. Enim error, repellat rerum
				labore corporis autem explicabo accusamus veritatis nesciunt minima eius culpa? Possimus recusandae incidunt
				perferendis. Quisquam sit dolore nostrum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
				ratione, inventore rem labore hic voluptatum iure officiis voluptates facere magni corrupti reprehenderit sit
				ipsam accusantium blanditiis quaerat dolores, est vel.
			</div>
		</div>
	);
};

export default Info;
