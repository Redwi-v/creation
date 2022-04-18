import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './clothes.module.scss';

import Slide from './Slide/Slide';

const Clothes = props => {
	const settings = {
		fade: true,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow className={style.arrow}/>,
		prevArrow: <SampleNextArrow direction='left'/>,
	};
	return (
		<div className='container'>
			<Slider {...settings} className={style.slider}>
				<Slide />
				<Slide />
				<Slide />
			</Slider>
		</div>
	);
};

export default Clothes;

const SampleNextArrow = props => {
	const { onClick, direction } = props;

	const chosederection = direction === 'left' ? style.arrowleft : style.arrowRight

	return (
		<div className={`${style.arrow} ${chosederection}`}>
			<button onClick={onClick}>{'>>'}</button>
		</div>
	);
};
