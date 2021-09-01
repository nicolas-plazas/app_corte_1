const Modal = ({ onClick }) => {
	return (
		<div
			className='modal fade'
			id='exampleModalCenter'
			tabIndex='-1'
			role='dialog'
			aria-labelledby='exampleModalCenterTitle'
			aria-hidden='true'
		>
			<div className='modal-dialog modal-dialog-centered' role='document'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title' id='exampleModalLongTitle'>
							Eliminar
						</h5>
						<button
							type='button'
							className='close'
							data-dismiss='modal'
							aria-label='Close'
						>
							<span aria-hidden='true'>&times;</span>
						</button>
					</div>
					<div className='modal-body'>Seguro desea eliminar este registro</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							data-dismiss='modal'
						>
							Cerrar
						</button>
						<button type='button' className='btn btn-danger' data-dismiss='modal' onClick={onClick}>
							Eliminar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
