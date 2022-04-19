import { connect } from 'react-redux';
import Clothes from './Clothes';

const ClothesContainer = props => {
	return <Clothes {...props} />;
};

const mapStateToProps = state => {
	return {
		slidesList: state.clothes.slidesList,
	};
};

export default connect(mapStateToProps, null)(ClothesContainer);
