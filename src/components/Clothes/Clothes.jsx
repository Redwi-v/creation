import image from '../../img/musicians.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './clothes.module.scss';

const Clothes = props => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SampleNextArrow />,
	};
	return (
		<div className='container'>
			<Slider {...settings} className={style.slider}>
				<div>
					<h1>number one</h1>
					<div className={style.content}>
						<img src={image} alt='' />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti quaerat fugit ea, similique
							explicabo. Aspernatur nemo qui nostrum, repellat quo delectus deserunt ipsa consectetur distinctio, cum
							omnis fuga quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestias quis
							suscipit sit blanditiis! Saepe minima ad provident consequuntur repudiandae architecto, totam inventore
							nisi maiores reprehenderit repellat nobis itaque delectus?
						</p>
					</div>
				</div>
				<div>
					<h1>number one</h1>
					<div className={style.content}>
						<img src={image} alt='' />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti quaerat fugit ea, similique
							explicabo. Aspernatur nemo qui nostrum, repellat quo delectus deserunt ipsa consectetur distinctio, cum
							omnis fuga quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestias quis
							suscipit sit blanditiis! Saepe minima ad provident consequuntur repudiandae architecto, totam inventore
							nisi maiores reprehenderit repellat nobis itaque delectus?
						</p>
					</div>
				</div>
				<div>
					<h1>number one</h1>
					<div className={style.content}>
						<img src={image} alt='' />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti quaerat fugit ea, similique
							explicabo. Aspernatur nemo qui nostrum, repellat quo delectus deserunt ipsa consectetur distinctio, cum
							omnis fuga quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestias quis
							suscipit sit blanditiis! Saepe minima ad provident consequuntur repudiandae architecto, totam inventore
							nisi maiores reprehenderit repellat nobis itaque delectus?
						</p>
					</div>
				</div>
				<div>
					<h1>number one</h1>
					<div className={style.content}>
						<img src={image} alt='' />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti quaerat fugit ea, similique
							explicabo. Aspernatur nemo qui nostrum, repellat quo delectus deserunt ipsa consectetur distinctio, cum
							omnis fuga quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestias quis
							suscipit sit blanditiis! Saepe minima ad provident consequuntur repudiandae architecto, totam inventore
							nisi maiores reprehenderit repellat nobis itaque delectus?
						</p>
					</div>
				</div>
				<div>
					<h1>number one</h1>
					<div className={style.content}>
						<img src={image} alt='' />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti quaerat fugit ea, similique
							explicabo. Aspernatur nemo qui nostrum, repellat quo delectus deserunt ipsa consectetur distinctio, cum
							omnis fuga quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestias quis
							suscipit sit blanditiis! Saepe minima ad provident consequuntur repudiandae architecto, totam inventore
							nisi maiores reprehenderit repellat nobis itaque delectus?
						</p>
					</div>
				</div>
				<div>
					<h1>number one</h1>
					<div className={style.content}>
						<img src={image} alt='' />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti quaerat fugit ea, similique
							explicabo. Aspernatur nemo qui nostrum, repellat quo delectus deserunt ipsa consectetur distinctio, cum
							omnis fuga quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestias quis
							suscipit sit blanditiis! Saepe minima ad provident consequuntur repudiandae architecto, totam inventore
							nisi maiores reprehenderit repellat nobis itaque delectus?
						</p>
					</div>
				</div>
			</Slider>
		</div>
	);
};

export default Clothes;

const SampleNextArrow = props => {
	const { className, style, onClick } = props;
	return (
		<div className='arrow'>
			<button onClick={onClick}>{'>>'}</button>
		</div>
	);
};
