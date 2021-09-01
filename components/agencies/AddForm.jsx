import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addAgency } from '../../actions/agencies';

const AddForm = (props) => {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			id: uuidv4(),
		},
	});
	const onSubmit = (data) => props.addAgency(data);

	return (
		<form className='bg-white p-5' onSubmit={handleSubmit(onSubmit)}>
			<h2>Crear agencia</h2>
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
					<label htmlFor='inputPais'>País</label>
					<input
						className='form-control'
						id='inputPais'
						placeholder='país'
						{...register('country')}
						required
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='inputDate'>Año creación</label>
					<input
						type='date'
						className='form-control'
						id='inputDate'
						{...register('yearCreation')}
						required
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='inputEmail'>Email</label>
					<input
						type='email'
						className='form-control'
						id='inputEmail'
						placeholder='email'
						{...register('email')}
						required
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='inputOwner'>Dueño</label>
					<input
						className='form-control'
						id='inputOwner'
						placeholder='dueño'
						{...register('owner')}
						required
					/>
				</div>
			</div>
			<button type='submit' className='btn btn-primary'>
				Crear
			</button>
		</form>
	);
};

const mapDispatchToProps = {
	addAgency,
};

export default connect(null, mapDispatchToProps)(AddForm);
