import { connect } from 'react-redux';
import CreateForm from '@components/events/addForm';

const Create = (props) => {
	return <CreateForm elements={props} />;
};

const mapStateToProps = (state) => {
	return {
		events: state.events.events,
		pavilions: state.pavilion.pavilions,
		parades: state.parades.parades,
		employees: state.employees.employees,
	};
};

export default connect(mapStateToProps, null)(Create);
