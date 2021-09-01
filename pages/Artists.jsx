import { connect } from 'react-redux';
import Table from '@components/artists/Table';

const Artists = ({ artists }) => {
	return (
		<>
			{/* Eventos */}
			<Table list={artists} />
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		artists: state.artists.artists,
	};
};

export default connect(mapStateToProps, null)(Artists);
