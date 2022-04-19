import style from './slide.module.scss';
import Logo from '../../Logo/Logo';

const Slide = props => {
	const { text, image, title } = props;

	return (
		<div>
			<Logo className={style.title} />

			<div className={style.content}>
				<div className={style.image}>
					<img src={image} alt='' />
				</div>
				<p className={style.text}>
					<span>{title} </span>
					{text}
				</p>
			</div>
		</div>
	);
};

export default Slide;
