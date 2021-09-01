import Link from 'next/link';
import Modal from '@components/Modal';

const Table = ({ list }) => {
	return (
		<>
			<div className='container-fluid py-4'>
				<div className='row'>
					<div className='col-12'>
						<div className='row bg-white rounded-3 p-3'>
							<div className='card-header pb-0 col-6'>
								<h6>Eventos</h6>
							</div>
							<div className='col-6 text-end mt-2 '>
								<a className='btn bg-primary text-white mb-0' href='#!'>
									Agregar
								</a>
							</div>
							<div className='card-body px-0 pt-0 pb-2'>
								<div className='table-responsive p-0'>
									<table className='table align-items-center mb-0'>
										<thead>
											<tr>
												<th className='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>
													Código
												</th>
												<th className='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2'>
													Nombre
												</th>
												<th className='text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>
													Fecha Inicio
												</th>
												<th className='text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>
													Fecha Fin
												</th>
												<th className='text-secondary opacity-7'></th>
												<th className='text-secondary opacity-7'></th>
											</tr>
										</thead>
										<tbody>
											{list.map((item) => {
												return (
													<tr key={item.id}>
														<td>
															<div className='d-flex px-2 py-1'>
																<div className='d-flex flex-column justify-content-center'>
																	<h6 className='mb-0 '>{item.id}</h6>
																</div>
															</div>
														</td>
														<td>
															<p className=' font-weight-bold mb-0'>
																{item.name}
															</p>
														</td>
														<td className='align-middle text-center '>
															<span className='badge badge-sm bg-gradient-success'>
																{item.startDate}
															</span>
														</td>
														<td className='align-middle text-center '>
															<span className='badge badge-sm bg-gradient-success'>
																{item.finishDate}
															</span>
														</td>
														<td className='align-middle'>
															<Link href='/events/Edit'>
																<a className='text-info font-weight-bold'>
																	Editar
																</a>
															</Link>
														</td>
														<td className='align-middle'>
															<a
																href='#!'
																className='text-danger font-weight-bold'
																data-toggle='modal'
																data-target='#exampleModalCenter'
															>
																Eliminar
															</a>
														</td>
													</tr>
												);
											})}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal />
		</>
	);
};

export default Table;
