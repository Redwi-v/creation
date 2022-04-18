import logo from '../../img/logo.png';
import { NavLink } from 'react-router-dom';

const Logo = props => {
	const { className } = props;

	return (
		<NavLink to='mainpage'>
			<img src={logo} alt='logo' className={className} />
		</NavLink>
	);
};

export default Logo;
