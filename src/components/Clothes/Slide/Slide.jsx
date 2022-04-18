import style from './slide.module.scss';
import Poniva from '../../../img/photos/Poniva2.jpg';
import Logo from '../../Logo/Logo';

const Slide = props => {
	return (
		<div>
			<Logo className={style.title} />

			<div className={style.content}>
				<div className={style.image}>
					<img src={Poniva} alt='' />
				</div>
				<p className={style.text}>
					<span>Lorem </span>
					ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti quaerat fugit ea, similique explicabo.
					Aspernatur nemo qui nostrum, repellat quo delectus deserunt ipsa consectetur distinctio, cum omnis fuga
					quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestias quis suscipit sit
					blanditiis! Saepe minima ad provident consequuntur repudiandae architecto, totam inventore nisi maiores
					reprehenderit repellat nobis itaque delectus?
				</p>
			</div>
		</div>
	);
};

export default Slide;
