import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { updateEmployee } from '../../actions/employees';

const EditForm = (props) => {
	const { employee } = props;

	const { register, handleSubmit } = useForm({
		defaultValues: {
			id: employee.id,
		}
	});
	const onSubmit = (data) => props.updateEmployee(data);

	return (
		<form className='bg-white p-5' onSubmit={handleSubmit(onSubmit)}>
			<h2>Editar empleado</h2>
			<div className='row'>
				<div className='form-group col-6'>
					<label htmlFor='inputName'>Nombre</label>
					<input
						className='form-control'
						id='inputName'
						placeholder='Nombre'
						{...register('name')}
						defaultValue={employee.name}
						required
					/>
				</div>
				<div className='form-group col-6'>
					<label htmlFor='inputPhoto'>Foto URL</label>
					<input
						className='form-control'
						id='inputPhoto'
						placeholder='foto'
						{...register('photo')}
						defaultValue={employee.photo}
						required
					/>
				</div>
			</div>
			<div className='form-group'>
				<label htmlFor='inputPhone'>Teléfono</label>
				<input
					type='number'
					className='form-control'
					id='inputPhone'
					placeholder='teléfono'
					{...register('phone')}
					defaultValue={employee.phone}
					required
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='inputPay'>Pago</label>
				<input
					type='number'
					className='form-control'
					id='inputPay'
					placeholder='pago'
					{...register('pay')}
					defaultValue={employee.pay}
					required
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='inputUni'>Universidad</label>
				<input
					className='form-control'
					id='inputUni'
					placeholder='universidad'
					{...register('university')}
					defaultValue={employee.university}
					required
				/>
			</div>
			<div className='form-group'>
				<div className='form-check'>
					<input
						className='form-check-input'
						type='checkbox'
						id='checkDirectivo'
						{...register('rol')}
						defaultChecked={employee.rol}
					/>
					<label className='form-check-label' htmlFor='checkDirectivo'>
						Es directivo
					</label>
				</div>
			</div>
			<button type='submit' className='btn btn-primary'>
				Guardar
			</button>
		</form>
	);
};

const mapDispatchToProps = {
	updateEmployee,
};

export default connect(null, mapDispatchToProps)(EditForm);
