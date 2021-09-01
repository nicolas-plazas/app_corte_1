import { connect } from 'react-redux';
import { withRouter } from 'next/router';
// actions
import { getDesigner } from '../../../actions/designers';
// components
import EditForm from '@components/designers/EditForm';
import NotFound from 'pages/NotFound';

const Edit = (props) => {
	const {
		router: { query },
	} = props;

	props.getDesigner(query.idDesigner);

	return <>{props.designer ? <EditForm designer={props.designer} elements={props} key={Math.random()} /> : <NotFound />}</>;
};

const mapStateToProps = (state) => {
	return {
		designer: state.designers.designer,
	};
};

const mapDispatchToProps = {
	getDesigner,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));

