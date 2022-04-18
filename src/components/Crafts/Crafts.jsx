import List from './LIst/LIst';
import Info from './Info/Info';
import Logo from '../Logo/Logo';

import style from './crafts.module.scss';

const Crafts = props => {
	return (
		<div className='container'>
			<div className={style.logoContainer}>
				<Logo className={style.logo} />
			</div>
			<div className={style.crafts}>
				<Info {...props} />
				<List {...props} />
			</div>
		</div>
	);
};

export default Crafts;
