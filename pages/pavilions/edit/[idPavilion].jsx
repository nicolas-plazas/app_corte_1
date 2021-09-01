import { connect } from 'react-redux';
import { withRouter } from 'next/router';
// actions
import { getPavilion } from '../../../actions/pavilion';
// components
import EditForm from '@components/pavilion/EditForm';
import NotFound from 'pages/NotFound';

const Edit = (props) => {
	const {
		router: { query },
	} = props;

	props.getPavilion(query.idPavilion);

	return <>{props.pavilion ? <EditForm pavilion={props.pavilion} elements={props} key={Math.random()} /> : <NotFound />}</>;
};

const mapStateToProps = (state) => {
	return {
		pavilion: state.pavilion.pavilion,
		employees: state.employees.employees,
	};
};

const mapDispatchToProps = {
	getPavilion,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));