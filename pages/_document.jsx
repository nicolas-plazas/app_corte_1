import Document, { Html, Head, Main, NextScript } from 'next/document';

class PortalDocument extends Document {
	render() {
		return (
			<Html lang='es'>
				<Head>
					<meta name='description' content='The Star Rover' />
				</Head>
				<body className='g-sidenav-show bg-gray-100'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default PortalDocument;
