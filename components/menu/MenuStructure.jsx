import Image from 'next/image';
import Link from 'next/link';

export const Container = ({ children }) => (
	<aside
		className='sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 '
		id='sidenav-main'
	>
		{children}
	</aside>
);

export const Title = () => (
	<>
		<div className='sidenav-header'>
			<Link href='/'>
				<a className='navbar-brand'>
					<span className='ms-1 font-weight-bold'>The Star Rover</span>
				</a>
			</Link>
		</div>
		<hr className='horizontal dark mt-0' />
	</>
);

export const Item = ({ menuItems }) => {
	return (
		<div className='collapse navbar-collapse w-auto max-height-vh-100 h-100'>
			<ul className='navbar-nav'>
				{menuItems.map((item) => (
					<li key={item.key} className='nav-item'>
						<Link href={item.href}>
							<a className='nav-link'>
								<div className='icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center'>
									<Image src={item.icon} alt='Icono del menú' />
								</div>
								<span className='nav-link-text ms-1'>{item.name}</span>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
