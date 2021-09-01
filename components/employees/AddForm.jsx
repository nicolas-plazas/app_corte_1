import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addEmployee } from '../../actions/employees';

const AddForm = (props) => {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			id: uuidv4(),
		},
	});

	const onSubmit = (data) => props.addEmployee(data);

	return (
		<form className='bg-white p-5' onSubmit={handleSubmit(onSubmit)}>
			<h2>Crear empleado</h2>
			<div className='row'>
				<div className='form-group col-6'>
					<label htmlFor='inputName'>Nombre</label>
					<input
						className='form-control'
						id='inputName'
						placeholder='Nombre'
						{...register('name')}
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
					/>
					<label className='form-check-label' htmlFor='checkDirectivo'>
						Es directivo
					</label>
				</div>
			</div>
			<button type='submit' className='btn btn-primary'>
				Crear
			</button>
		</form>
	);
};

const mapDispatchToProps = {
	addEmployee,
};

export default connect(null, mapDispatchToProps)(AddForm);
