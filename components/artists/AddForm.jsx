import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addArtist } from '../../actions/artists';

const AddForm = (props) => {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			id: uuidv4(),
		},
	});
	const onSubmit = (data) => props.addArtist(data);

	return (
		<form className='bg-white p-5' onSubmit={handleSubmit(onSubmit)}>
			<h2>Crear artista</h2>
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
					<label htmlFor='inputGenero'>Género</label>
					<input
						className='form-control'
						id='inputGenero'
						placeholder='género'
						{...register('musicalGenre')}
						required
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='inputDate'>Año creación</label>
					<input
						type='date'
						className='form-control'
						id='inputDate'
						{...register('creationDate')}
						required
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='inputPago'>Pago</label>
					<input
						type='number'
						className='form-control'
						id='inputPago'
						placeholder='pago'
						{...register('pay')}
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
	addArtist,
};

export default connect(null, mapDispatchToProps)(AddForm);
