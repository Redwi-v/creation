import { connect } from 'react-redux';
import Crafts from './Crafts';

const CraftsContainer = props => {
	return <Crafts {...props} />;
};

const mapStateToProps = state => {
	return {
		items: state.crafts.info,
	};
};

export default connect(mapStateToProps, null)(CraftsContainer);
