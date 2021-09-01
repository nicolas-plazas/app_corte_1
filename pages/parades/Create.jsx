import { connect } from 'react-redux';
import CreateForm from '@components/parades/addForm';

const Create = (props) => {
	return <CreateForm elements={props} />;
};

const mapStateToProps = (state) => {
	return {
		designers: state.designers.designers,
	};
};


export default connect(mapStateToProps, null)(Create);
