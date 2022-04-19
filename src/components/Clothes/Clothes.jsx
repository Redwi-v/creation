import Slider from 'react-slick';
import Slide from './Slide/Slide';

import style from './clothes.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import arrow from '../../img/icons/arrow.png';

const Clothes = props => {
	const { slidesList } = props;

	const slides = slidesList.map((el, id) => {
		return <Slide key={id} title={el.title} text={el.text} image={el.image} />;
	});

	const settings = {
		fade: true,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow className={style.arrow} />,
		prevArrow: <SampleNextArrow direction='left' />,
	};
	return (
		<Slider {...settings} className={style.slider}>
			{slides}
		</Slider>
	);
};

export default Clothes;

const SampleNextArrow = props => {
	const { onClick, direction } = props;

	const chosederection = direction === 'left' ? style.arrowleft : style.arrowRight;

	return (
		<div className={`${style.arrow} ${chosederection}`}>
			<img onClick={onClick} src={arrow} alt='arrow' />
		</div>
	);
};
