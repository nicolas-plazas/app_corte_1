import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addDesigner } from '../../actions/designers';

const AddForm = (props) => {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			id: uuidv4(),
		},
	});
	const onSubmit = (data) => props.addDesigner(data);

	return (
		<form className='bg-white p-5' onSubmit={handleSubmit(onSubmit)}>
			<h2>Crear diseñador</h2>
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
					<label htmlFor='inputPass'>Pasaporte</label>
					<input
						className='form-control'
						id='inputPass'
						placeholder='pasaporte'
						{...register('passport')}
						required
					/>
				</div>
			</div>
			<div className='form-group'>
				<label htmlFor='inputCountry'>País</label>
				<input
					className='form-control'
					id='inputCountry'
					placeholder='país'
					{...register('country')}
					required
				/>
			</div>
			<button type='submit' className='btn btn-primary'>
				Crear
			</button>
		</form>
	);
};

const mapDispatchToProps = {
	addDesigner,
};

export default connect(null, mapDispatchToProps)(AddForm);
