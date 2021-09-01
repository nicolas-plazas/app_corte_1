import Link from "next/link";

const Tables = () => {
	return (
		<>
			<div className='container-fluid py-4'>
				<div className='row'>
					<div className='col-12'>
						<div className='row bg-white rounded-3 p-3'>
							<div className='card-header pb-0 col-6'>
								<h6>Authors table 1</h6>
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
													Author
												</th>
												<th className='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2'>
													Function
												</th>
												<th className='text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>
													Status
												</th>
												<th className='text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>
													Employed
												</th>
												<th className='text-secondary opacity-7'></th>
                                                <th className='text-secondary opacity-7'></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div className='d-flex px-2 py-1'>
														<div>
															<img
																src='../assets/img/team-2.jpg'
																className='avatar avatar-sm me-3'
																alt='user1'
															/>
														</div>
														<div className='d-flex flex-column justify-content-center'>
															<h6 className='mb-0 text-sm'>John Michael</h6>
															<p className=' text-secondary mb-0'>
																john@creative-tim.com
															</p>
														</div>
													</div>
												</td>
												<td>
													<p className=' font-weight-bold mb-0'>Manager</p>
													<p className=' text-secondary mb-0'>
														Organization
													</p>
												</td>
												<td className='align-middle text-center text-sm'>
													<span className='badge badge-sm bg-gradient-success'>
														Online
													</span>
												</td>
												<td className='align-middle text-center'>
													<span className='text-secondary font-weight-bold'>
														23/04/18
													</span>
												</td>
												<td className='align-middle'>
													<a
														href='#!'
														className='text-info font-weight-bold'
													>
														Editar
													</a>
												</td>
                                                <td className='align-middle'>
													<a
														href='#!'
														className='text-danger font-weight-bold'
													>
														Eliminar
													</a>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Tables;
