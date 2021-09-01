import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { updateDesigner } from '../../actions/designers';

const EditForm = (props) => {
	const { designer } = props;

	const { register, handleSubmit } = useForm({
		defaultValues: {
			id: designer.id,
		}
	});

	const onSubmit = (data) => props.updateDesigner(data);

	return (
		<form className='bg-white p-5' onSubmit={handleSubmit(onSubmit)}>
			<h2>Editar diseñador</h2>
			<div className='row'>
				<div className='form-group col-6'>
					<label htmlFor='inputName'>Nombre</label>
					<input
						className='form-control'
						id='inputName'
						placeholder='Nombre'
						{...register('name')}
						defaultValue={designer.name}
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
						defaultValue={designer.passport}
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
					defaultValue={designer.country}
					required
				/>
			</div>
			<button type='submit' className='btn btn-primary'>
				Guardar
			</button>
		</form>
	);
};

const mapDispatchToProps = {
	updateDesigner,
};

export default connect(null, mapDispatchToProps)(EditForm);
