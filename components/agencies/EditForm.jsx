import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { updateAgency } from '../../actions/agencies';

const EditForm = (props) => {
	const { agency } = props;

	const { register, handleSubmit } = useForm({
		defaultValues: {
			id: agency.id,
		},
	});

	const onSubmit = (data) => props.updateAgency(data);

	return (
		<form className='bg-white p-5' onSubmit={handleSubmit(onSubmit)}>
			<h2>Editar agencia</h2>
			<div className='row'>
				<div className='form-group col-6'>
					<label htmlFor='inputName'>Nombre</label>
					<input
						className='form-control'
						id='inputName'
						placeholder='Nombre'
						{...register('name')}
						defaultValue={agency.name}
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
						defaultValue={agency.country}
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
						defaultValue={agency.yearCreation}
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
						defaultValue={agency.email}
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
						defaultValue={agency.owner}
						required
					/>
				</div>
			</div>
			<button type='submit' className='btn btn-primary'>
				Guardar
			</button>
		</form>
	);
};

const mapDispatchToProps = {
	updateAgency,
};

export default connect(null, mapDispatchToProps)(EditForm);
