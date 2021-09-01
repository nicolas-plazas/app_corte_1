import Menu from './Menu';

const Layout = ({ children }) => {
	return (
		<>
			<Menu />
			<main className='main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg '>
				{/* <NavBar /> */}
				<div className='container-fluid py-4'>
					<div className='container-fluid py-4'>{children}</div>
				</div>
			</main>
		</>
	);
};

export default Layout;
