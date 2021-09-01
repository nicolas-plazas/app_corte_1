import { connect } from 'react-redux';
import Table from '@components/agencies/Table';

const Agencies = ({ agencies }) => {
	return (
		<>
			{/* Eventos */}
			<Table list={agencies} />
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		agencies: state.agencies.agencies,
	};
};

export default connect(mapStateToProps, null)(Agencies);
