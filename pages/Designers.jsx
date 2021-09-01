import { connect } from 'react-redux';
import Table from '@components/designers/Table';

const Designers = ({ designers }) => {
	return (
		<>
			{/* Eventos */}
			<Table list={designers} />
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		designers: state.designers.designers,
	};
};

export default connect(mapStateToProps, null)(Designers);