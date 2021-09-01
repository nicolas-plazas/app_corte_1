import { connect } from 'react-redux';
import Table from '@components/parades/Table';

const Parades = ({ parades }) => {
	return (
		<>
			{/* Eventos */}
			<Table list={parades} />
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		parades: state.parades.parades,
	};
};

export default connect(mapStateToProps, null)(Parades);