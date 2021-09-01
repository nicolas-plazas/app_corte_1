import { connect } from 'react-redux';
import { withRouter } from 'next/router';
// actions
import { getEvent } from '../../../actions/events';
// components
import EditForm from '@components/events/EditForm';
import NotFound from 'pages/NotFound';

const Edit = (props) => {
	const {
		router: { query },
	} = props;

	props.getEvent(query.idEvent);

	return <>{props.event ? <EditForm data={props.event} elements={props} key={Math.random()} /> : <NotFound />}</>;
};

const mapStateToProps = (state) => {
	return {
		event: state.events.event,
		events: state.events.events,
		pavilions: state.pavilion.pavilions,
		parades: state.parades.parades,
		employees: state.employees.employees,
	};
};

const mapDispatchToProps = {
	getEvent,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));
