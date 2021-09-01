import { connect } from 'react-redux';
import Table from '@components/employees/Table';

const Employees = ({ employees }) => {
	return (
		<>
			{/* Eventos */}
			<Table list={employees} />
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		employees: state.employees.employees,
	};
};

export default connect(mapStateToProps, null)(Employees);
