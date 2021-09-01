import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addModel } from '../../actions/models';

const AddForm = (props) => {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			id: uuidv4(),
		},
	});
	const onSubmit = (data) => props.addModel(data);

	return (
		<form className='bg-white p-5' onSubmit={handleSubmit(onSubmit)}>
			<h2>Crear modelo</h2>
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
				<div className='form-group col-6'>
					<label htmlFor='birthDate'>Fecha Nacimiento</label>
					<input
						type='date'
						className='form-control'
						id='birthDate'
						{...register('birthDate')}
						required
					/>
				</div>
				<div className='form-group col-6'>
					<label htmlFor='pay'>Pago</label>
					<input
						type='number'
						className='form-control'
						id='pay'
						{...register('pay')}
						required
					/>
				</div>
				<div className='form-group col-6'>
					<label htmlFor='eyes'>Color Ojos</label>
					<input
						className='form-control'
						id='eyes'
						placeholder='color ojos'
						{...register('eyeColor')}
						required
					/>
				</div>
				<div className='form-group col-6'>
					<label htmlFor='height'>Altura</label>
					<input
						type='number'
						className='form-control'
						id='height'
						placeholder='altura'
						{...register('height')}
						required
					/>
				</div>
				<div className='form-group col-6'>
					<label htmlFor='eyes'>Cintura</label>
					<input
						type='number'
						className='form-control'
						id='waist'
						placeholder='cintura'
						{...register('waist')}
						required
					/>
				</div>
				<div className='form-group col-6'>
					<label htmlFor='chest'>Busto</label>
					<input
						type='number'
						className='form-control'
						id='chest'
						placeholder='busto'
						{...register('chest')}
						required
					/>
				</div>
				<div className='form-group col-6'>
					<label htmlFor='shoeSize'>Calzado</label>
					<input
						type='number'
						className='form-control'
						id='shoeSize'
						placeholder='calzado'
						{...register('shoeSize')}
						required
					/>
				</div>
				<div className='form-group col-6'>
					<label htmlFor='weight'>Peso</label>
					<input
						type='number'
						className='form-control'
						id='weight'
						placeholder='peso'
						{...register('weight')}
						required
					/>
				</div>
				<div className='form-group col-6'>
					<label htmlFor='peculiarities'>Peculiaridades</label>
					<input
						className='form-control'
						id='peculiarities'
						placeholder='Peculiaridades'
						{...register('peculiarities')}
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
	addModel,
};

export default connect(null, mapDispatchToProps)(AddForm);
