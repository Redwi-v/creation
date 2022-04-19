import Logo from '../Logo/Logo';
import style from './legends.module.scss';

const Legends = props => {
	const { legendsList } = props;

	const items = legendsList.map(legend => {
		return <Item key={legend.id} />;
	});

	return (
		<div className=''>
			<Logo className={style.logo} />
			<div className='container'>
				<ul className={style.legends}>{items}</ul>
			</div>
		</div>
	);
};

export default Legends;

const Item = props => {
	return (
		<li className={style.item}>
			<h2 className={style.title}>LegendOne</h2>
			<p className={style.text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repudiandae omnis voluptate quam eius illum
				voluptatem blanditiis ab dolor reiciendis? Tempore, tempora fuga dolor doloremque nobis laboriosam suscipit
				similique labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam id amet et aspernatur eos
				eaque, optio minima? Molestias, similique! Animi hic sit enim facilis dignissimos, a iusto. Laboriosam, repellat
				architecto!
			</p>
		</li>
	);
};
