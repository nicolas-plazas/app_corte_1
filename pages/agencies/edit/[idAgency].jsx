import { connect } from 'react-redux';
import { withRouter } from 'next/router';
// actions
import { getAgency } from '../../../actions/agencies';
// components
import EditForm from '@components/agencies/EditForm';
import NotFound from 'pages/NotFound';

const Edit = (props) => {
	const {
		router: { query },
	} = props;

	props.getAgency(query.idAgency);

	return <>{props.agency ? <EditForm agency={props.agency} elements={props} key={Math.random()} /> : <NotFound />}</>;
};

const mapStateToProps = (state) => {
	return {
		agency: state.agencies.agency,
	};
};

const mapDispatchToProps = {
	getAgency,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));
