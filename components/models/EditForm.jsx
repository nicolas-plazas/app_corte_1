import EventsLists from '@components/home/EventsLists';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { updateModel } from '../../actions/models';

const EditForm = (props) => {
	const { model } = props;

	const { register, handleSubmit } = useForm({
		defaultValues: {
			id: model.id,
		},
	});
	const onSubmit = (data) => props.updateModel(data);

	return (
		<>
			<form className='bg-white p-5' onSubmit={handleSubmit(onSubmit)}>
				<h2>Editar modelo</h2>
				<div className='row'>
					<div className='form-group col-6'>
						<label htmlFor='inputName'>Nombre</label>
						<input
							className='form-control'
							id='inputName'
							placeholder='Nombre'
							{...register('name')}
							defaultValue={model.name}
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
							defaultValue={model.passport}
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
							defaultValue={model.country}
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
							defaultValue={model.birthDate}
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
							defaultValue={model.pay}
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
							defaultValue={model.eyeColor}
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
							defaultValue={model.height}
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
							defaultValue={model.waist}
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
							defaultValue={model.chest}
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
							defaultValue={model.shoeSize}
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
							defaultValue={model.weight}
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
							defaultValue={model.peculiarities}
							required
						/>
					</div>
				</div>
				<button type='submit' className='btn btn-primary'>
					Guardar
				</button>
			</form>
			<EventsLists />
		</>
	);
};

const mapDispatchToProps = {
	updateModel,
};

export default connect(null, mapDispatchToProps)(EditForm);
