import img from '../../img/musicians.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './clothes.module.scss';

const Clothes = props => {
	const settings = {
		className: style.center,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
	};
	return (
		<Slider {...settings}>
			<div>
				<h3>1</h3>
			</div>
			<div>
				<h3>2</h3>
			</div>
			<div>
				<h3>3</h3>
			</div>
			<div>
				<h3>4</h3>
			</div>
			<div>
				<h3>5</h3>
			</div>
			<div>
				<h3>6</h3>
			</div>
		</Slider>
	);
};

export default Clothes;
