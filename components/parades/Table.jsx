import { useState } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { removeParade } from '../../actions/parades';
import Modal from '@components/Modal';

const Table = (props) => {
	const { list } = props;
	const [paradesId, setParadesId] = useState('');

	const handleSetId = (id) => (e) => {
		setParadesId(id)
	}

	const handleRemove = (e) => {
		props.removeParade(paradesId)
	}

	return (
		<>
			<div className='container-fluid py-4'>
				<div className='row'>
					<div className='col-12'>
						<div className='row bg-white rounded-3 p-3'>
							<div className='card-header pb-0 col-6'>
								<h6>Desfiles</h6>
							</div>
							<div className='col-6 text-end mt-2 '>
								<Link href='/parades/Create'>
									<a className='btn bg-primary text-white mb-0'>Agregar</a>
								</Link>
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
												<th className='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2'>
													Fecha
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
																<div className='d-flex'>
																	<span className='mb-0 '>{item.id}</span>
																</div>
															</div>
														</td>
														<td>
															<span className=' font-weight-bold mb-0'>
																{item.name}
															</span>
														</td>
														<td>
															<p className=' font-weight-bold mb-0'>
																{item.date}
															</p>
														</td>
														<td className='align-middle'>
															<Link href={`/parades/edit/${item.id}`}>
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
																onClick={handleSetId(item.id)}
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
			<Modal onClick={handleRemove} />
		</>
	);
};

const mapDispatchToProps = {
	removeParade,
};

export default connect(null, mapDispatchToProps)(Table);
