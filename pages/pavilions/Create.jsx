import { connect } from 'react-redux';
import CreateForm from '@components/pavilion/addForm';

const Create = (props) => {
	return <CreateForm employees={props.employees} />;
};

const mapStateToProps = (state) => {
	return {
		employees: state.employees.employees,
	};
};

export default connect(mapStateToProps, null)(Create);
