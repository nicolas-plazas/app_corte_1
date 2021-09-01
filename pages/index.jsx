import { connect } from 'react-redux';
import Table from '@components/events/Table';

const Events = ({ events }) => {
	return (
		<>
			{/* Eventos */}
			<Table list={events} />
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		events: state.events.events,
	};
};

export default connect(mapStateToProps, null)(Events);
