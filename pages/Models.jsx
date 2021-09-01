import { connect } from 'react-redux';
import Table from '@components/models/Table';

const Models = ({ models }) => {
	return (
		<>
			{/* Eventos */}
			<Table list={models} />
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		models: state.models.models,
	};
};

export default connect(mapStateToProps, null)(Models);