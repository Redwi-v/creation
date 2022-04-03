import { connect } from 'react-redux';
import { openMenu, closeMenu } from '../../redux/menu';
import Menu from './Menu';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const MenuContainer = props => {
	const { openMenu, closeMenu, menuOpen } = props;

	// закрывает меню если изменился путь
	let path = useLocation().pathname;
	useEffect(() => {
		closeMenu();
	}, [path]);

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
