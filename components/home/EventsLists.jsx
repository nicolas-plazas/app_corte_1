const EventsLists = () => {
	return (
		<div className='col-12 mt-4'>
			<div className='card mb-4'>
				<div className='card-body p-4'>
					<div className='row'>
						<div className='pb-0 col-6 mb-4'>
							<h6>Portafolio</h6>
						</div>
						<div className='col-6 text-end'>
							<a className='btn bg-primary text-white mb-0' href='#!'>
								Agregar
							</a>
						</div>
						<div className='col-xl-3 col-md-6 mb-xl-0 mb-4'>
							<div className='card card-blog card-plain'>
								<div className='position-relative'>
									<a className='d-block shadow-xl border-radius-xl'>
										<img
											src='https://media.fashionnetwork.com/m/58da/9346/4f86/5c65/b45b/9508/9d9d/b7ab/e8be/95ec/95ec.jpg'
											alt='img-blur-shadow'
											className='img-fluid shadow border-radius-xl'
										/>
									</a>
								</div>
								<div className='card-body px-1 pb-0'>
									<p className='text-gradient text-dark mb-2 '>
										Portafolio #1
									</p>
									<a href='#'>
										<h5>Colección</h5>
									</a>
									<p className='mb-4 '>
										Objetivo portafolio
									</p>
									<div className='d-flex align-items-center justify-content-between'>
										<button
											type='button'
											className='btn btn-outline-primary btn-sm mb-0'
										>
											Ver
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventsLists;
