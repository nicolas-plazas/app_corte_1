import { connect } from 'react-redux';
import { withRouter } from 'next/router';
// actions
import { getModel } from '../../../actions/models';
// components
import EditForm from '@components/models/EditForm';
import NotFound from 'pages/NotFound';

const Edit = (props) => {
	const {
		router: { query },
	} = props;

	props.getModel(query.idModel);

	return <>{props.model ? <EditForm model={props.model} elements={props} key={Math.random()} /> : <NotFound />}</>;
};

const mapStateToProps = (state) => {
	return {
		model: state.models.model,
	};
};

const mapDispatchToProps = {
	getModel,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));