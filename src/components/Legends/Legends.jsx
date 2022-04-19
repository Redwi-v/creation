import Logo from '../Logo/Logo';
import style from './legends.module.scss';

const Legends = props => {
	const { legendsList } = props;

	const items = legendsList.map(legend => {
		return <Item key={legend.id} title={legend.title} text={legend.text} />;
	});

	return (
		<div className='slideLeft'>
			<Logo className={style.logo} />
			<div className='container'>
				<ul className={style.legends}>{items}</ul>
			</div>
		</div>
	);
};

export default Legends;

const Item = props => {
	const { title, text } = props;

	return (
		<li className={style.item}>
			<h2 className={style.title}>{title}</h2>
			<p className={style.text}>{text}</p>
		</li>
	);
};
