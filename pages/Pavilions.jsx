import { connect } from 'react-redux';
import Table from '@components/pavilion/Table';

const Pavilions = ({ pavilions }) => {
	return (
		<>
			{/* Eventos */}
			<Table list={pavilions} />
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		pavilions: state.pavilion.pavilions,
	};
};

export default connect(mapStateToProps, null)(Pavilions);