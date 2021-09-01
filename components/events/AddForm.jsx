import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addEvent } from '../../actions/events';

const AddForm = (props) => {
	const { elements } = props;

	const { register, handleSubmit } = useForm({
		defaultValues: {
			id: uuidv4(),
		},
	});

	const onSubmit = (data) => props.addEvent(data);

	return (
		<form
			className='bg-white p-5'
			onSubmit={handleSubmit(onSubmit)}
			key='form-create-event'
		>
			<h2>Crear Evento</h2>
			<div className='row'>
				<div className='form-group'>
					<label htmlFor='eventName'>Nombre</label>
					<input
						className='form-control'
						id='eventName'
						placeholder='Nombre'
						{...register('name', {
							pattern: /^[A-Za-z]+$/i,
							required: true,
							maxLength: 20,
						})}
						required
					/>
				</div>
				<div className='form-group col-6'>
					<label htmlFor='startDate'>Fecha Inicio</label>
					<input
						type='datetime-local'
						className='form-control'
						id='startDate'
						{...register('startDate')}
						required
					/>
				</div>
				<div className='form-group col-6'>
					<label htmlFor='finishDate'>Fecha Fin</label>
					<input
						type='datetime-local'
						className='form-control'
						id='finishDate'
						{...register('finishDate')}
						required
					/>
				</div>
				<div className='form-group col-6'>
					<label htmlFor='finishDate'>Directvo</label>
					<select
						{...register('idDirectivo')}
						className='form-control'
						required
					>
						{elements.employees
							.filter((item) => item.rol)
							.map((employee) => {
								return (
									<option key={`dir-${employee.id}`} value={employee.id}>
										{employee.name}
									</option>
								);
							})}
					</select>
				</div>
				<div className='form-group col-6'>
					<label htmlFor='finishDate'>Pabellón</label>
					<select {...register('idParade')} className='form-control' required>
						{elements.pavilions.map((pavilion) => {
							return (
								<option key={`pav-${pavilion.id}`} value={pavilion.id}>
									{pavilion.name}
								</option>
							);
						})}
					</select>
				</div>
				{/* <div className='form-group col-6'>
					<label htmlFor='finishDate'>Empleados Rasos</label>
					<br />
					<select
						{...register('idRasos')}
						className='selectpicker'
						multiple
						data-live-search='true'
						required
					>
						{elements.employees
							.filter((item) => !item.rol)
							.map((employee) => {
								return (
									<option key={`dir-${employee.id}`} value={employee.id}>
										{employee.name}
									</option>
								);
							})}
					</select>
				</div> */}
				<div className='form-group col-6'>
					<label htmlFor='finishDate'>Empleados Rasos</label>
					<br />
					<select {...register('idRasos')} multiple required>
						{elements.employees
							.filter((item) => !item.rol)
							.map((employee) => {
								return (
									<option key={`desf-${employee.id}`} value={employee.id}>
										{employee.name}
									</option>
								);
							})}
					</select>
				</div>
				<div className='form-group col-6'>
					<label htmlFor='finishDate'>Desfiles</label>
					<br />
					<select {...register('idDesfiles')} multiple required>
						{elements.parades.map((parade) => {
							return (
								<option key={`desfiles-${parade.id}`} value={parade.id}>
									{parade.name}
								</option>
							);
						})}
					</select>
				</div>
			</div>
			<button type='submit' className='btn btn-primary'>
				Crear
			</button>
		</form>
	);
};

const mapDispatchToProps = {
	addEvent,
};

export default connect(null, mapDispatchToProps)(AddForm);
