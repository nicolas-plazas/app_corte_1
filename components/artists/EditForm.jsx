import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { updateArtist } from '../../actions/artists';

const EditForm = (props) => {
	const { artist } = props;

	const { register, handleSubmit } = useForm({
		defaultValues: {
			id: artist.id,
		},
	});

	const onSubmit = (data) => props.updateArtist(data);

	return (
		<form className='bg-white p-5' onSubmit={handleSubmit(onSubmit)}>
			<h2>Editar artista</h2>
			<div className='row'>
				<div className='form-group col-6'>
					<label htmlFor='inputName'>Nombre</label>
					<input
						className='form-control'
						id='inputName'
						placeholder='Nombre'
						{...register('name')}
						defaultValue={artist.name}
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
						defaultValue={artist.musicalGenre}
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
						defaultValue={artist.creationDate}
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
						defaultValue={artist.pay}
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
	updateArtist,
};

export default connect(null, mapDispatchToProps)(EditForm);
