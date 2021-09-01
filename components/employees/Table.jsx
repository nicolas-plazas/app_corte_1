import { useState } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { removeEmployee } from '../../actions/employees';
import Modal from '@components/Modal';

const Table = (props) => {
	const { list } = props;
	const [employeeId, setEmployeeId] = useState('');

	const handleSetId = (id) => (e) => {
		setEmployeeId(id)
	}

	const handleRemove = (e) => {
		props.removeEmployee(employeeId)
	}

	return (
		<>
			<div className='container-fluid py-4'>
				<div className='row'>
					<div className='col-12'>
						<div className='row bg-white rounded-3 p-3'>
							<div className='card-header pb-0 col-6'>
								<h6>Empleados</h6>
							</div>
							<div className='col-6 text-end mt-2 '>
								<Link href='/employees/Create'>
									<a className='btn bg-primary text-white mb-0'>Agregar</a>
								</Link>
							</div>
							<div className='card-body px-0 pt-0 pb-2'>
								<div className='table-responsive p-0'>
									<table className='table align-items-center mb-0'>
										<thead>
											<tr>
												<th className='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>
													Id
												</th>
												<th className='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2'>
													Nombre
												</th>
												<th className='text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>
													Rol
												</th>
												<th className='text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>
													Salario
												</th>
												<th className='text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>
													Teléfono
												</th>
												<th className='text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>
													Universidad
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
																<div>
																	<img
																		src={
																			item.photo ||
																			'https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1705/tuktukdesign170500028/77461815-icono-de-usuario-vector-hombre-perfil-de-la-persona-avatar-glyph-pictograma-s%C3%ADmbolo-ilustraci%C3%B3n.jpg?ver=6'
																		}
																		className='avatar avatar-sm me-3'
																		alt='avatar'
																	/>
																</div>
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
														<td className='align-middle text-center'>
															<span className='badge badge-sm bg-gradient-success'>
																{item.rol}
															</span>
														</td>
														<td className='align-middle text-center'>
															<span className='font-weight-bold'>
																{item.pay}
															</span>
														</td>
														<td className='align-middle text-center'>
															<span className='font-weight-bold'>
																{item.phone}
															</span>
														</td>
														<td className='align-middle text-center'>
															<span className='font-weight-bold'>
																{item.university}
															</span>
														</td>
														<td className='align-middle'>
															<Link href={`/employees/edit/${item.id}`}>
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
	removeEmployee,
};

export default connect(null, mapDispatchToProps)(Table);
