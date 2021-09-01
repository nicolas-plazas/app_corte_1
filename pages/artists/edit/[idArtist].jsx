import { connect } from 'react-redux';
import { withRouter } from 'next/router';
// actions
import { getArtist } from '../../../actions/artists';
// components
import EditForm from '@components/artists/EditForm';
import NotFound from 'pages/NotFound';

const Edit = (props) => {
	const {
		router: { query },
	} = props;

	props.getArtist(query.idArtist);

	return <>{props.artist ? <EditForm artist={props.artist} elements={props} key={Math.random()} /> : <NotFound />}</>;
};

const mapStateToProps = (state) => {
	return {
		artist: state.artists.artist,
	};
};

const mapDispatchToProps = {
	getArtist,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));
