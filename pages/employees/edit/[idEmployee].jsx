import { connect } from 'react-redux';
import { withRouter } from 'next/router';
// actions
import { getEmployee } from '../../../actions/employees';
// components
import EditForm from '@components/employees/EditForm';
import NotFound from 'pages/NotFound';

const Edit = (props) => {
	const {
		router: { query },
	} = props;

	props.getEmployee(query.idEmployee);

	return <>{props.employee ? <EditForm employee={props.employee} elements={props} key={Math.random()} /> : <NotFound />}</>;
};

const mapStateToProps = (state) => {
	return {
		employee: state.employees.employee,
	};
};

const mapDispatchToProps = {
	getEmployee,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));

