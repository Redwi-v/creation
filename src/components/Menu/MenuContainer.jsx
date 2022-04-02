import { connect } from 'react-redux';
import { openMenu, closeMenu } from '../../redux/menu';
import Menu from './Menu';

const MenuContainer = props => {
	const { openMenu, closeMenu, menuOpen } = props;
	const menuOpenHendler = () => {
		menuOpen ? closeMenu() : openMenu();
	};

	return <Menu {...{ menuOpen, menuOpenHendler }} />;
};

// Conect
const mapStateToProps = state => {
	return {
		menuOpen: state.menu.menuOpen,
	};
};

export default connect(mapStateToProps, { openMenu, closeMenu })(MenuContainer);
