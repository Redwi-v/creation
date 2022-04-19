import { connect } from 'react-redux';
import Legends from './Legends';

const LegendsContainer = props => {
	return <Legends {...props} />;
};

const mapStateToprops = state => {
	return {
		legendsList: state.legends.legendsList,
	};
};

export default connect(mapStateToprops, null)(LegendsContainer);
