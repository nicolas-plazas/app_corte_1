import Head from 'next/head';
import { wrapper } from '../reducers/store';
// App Components
import Layout from '../components/Layout';
// Styles
import '../styles/bootstrap.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				{/* Fonts */}
				<link
					href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700'
					rel='stylesheet'
				/>
				<script
					src='https://code.jquery.com/jquery-3.2.1.slim.min.js'
					integrity='sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN'
					crossOrigin='anonymous'
				></script>
				<script
					src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'
					integrity='sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q'
					crossOrigin='anonymous'
				></script>
				<script
					src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'
					integrity='sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl'
					crossOrigin='anonymous'
				></script>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css" />
				<script src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js'></script>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default wrapper.withRedux(MyApp);
