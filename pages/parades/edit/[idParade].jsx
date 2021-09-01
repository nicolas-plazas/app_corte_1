import { connect } from 'react-redux';
import { withRouter } from 'next/router';
// actions
import { getParade } from '../../../actions/parades';
// components
import EditForm from '@components/parades/EditForm';
import NotFound from 'pages/NotFound';

const Edit = (props) => {
	const {
		router: { query },
	} = props;

	props.getParade(query.idParade);

	return <>{props.parade ? <EditForm parade={props.parade} elements={props} key={Math.random()} /> : <NotFound />}</>;
};

const mapStateToProps = (state) => {
	return {
		parade: state.parades.parade,
		designers: state.designers.designers,
	};
};

const mapDispatchToProps = {
	getParade,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));