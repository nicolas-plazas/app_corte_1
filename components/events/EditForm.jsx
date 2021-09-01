import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { updateEvent } from '../../actions/events';

const EditForm = (props) => {
	const { data: event, elements } = props;

	const { register, handleSubmit } = useForm({
		defaultValues: {
			id: event.id,
		}
	});
	const onSubmit = (data) => props.updateEvent(data);

	return (
		<form key={event.id} className='bg-white p-5' onSubmit={handleSubmit(onSubmit)} >
			<h2>Editar Evento</h2>
			<div className='row'>
				<div className='form-group'>
					<label htmlFor='eventName'>Nombre</label>
					<input
						className='form-control'
						id='eventName'
						placeholder='Nombre'
						{...register('name')}
						defaultValue={event.name}
					/>
				</div>
				<div className='form-group col-6'>
					<label htmlFor='startDate'>Fecha Inicio</label>
					<input
						type='datetime-local'
						className='form-control'
						id='startDate'
						{...register('startDate')}
						defaultValue={event.startDate}
					/>
				</div>
				<div className='form-group col-6'>
					<label htmlFor='finishDate'>Fecha Fin</label>
					<input
						type='datetime-local'
						className='form-control'
						id='finishDate'
						{...register('finishDate')}
						defaultValue={event.finishDate}
					/>
				</div>
				<div className='form-group col-6'>
					<label htmlFor='finishDate'>Directivo</label>
					<select
						{...register('idDirectivo')}
						className='form-control'
						defaultValue={event.idDirectivo}
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
					<select
						{...register('idParade')}
						className='form-control'
						defaultValue={event.idParade}
						required
					>
						{elements.pavilions.map((pavilion) => {
							return (
								<option key={`pav-${pavilion.id}`} value={pavilion.id}>
									{pavilion.name}
								</option>
							);
						})}
					</select>
				</div>
				<div className='form-group col-6'>
					<label htmlFor='finishDate'>Empleados Rasos</label>
					<br />
					<select
						{...register('idRasos')}
						// className='selectpicker'
						multiple
						// data-live-search='true'
						required
					>
						{elements.employees
							.filter((item) => !item.rol)
							.map((employee) => {
								return (
									<option
										key={`dir-${employee.id}`}
										value={employee.id}
										selected={event.idRasos.find(
											(item) => item.toString() === employee.id.toString(),
										)}
									>
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
								<option
									key={`desfiles-${parade.id}`}
									value={parade.id}
									selected={event.idDesfiles.find(
										(item) => item.toString() === parade.id.toString(),
									)}
								>
									{parade.name}
								</option>
							);
						})}
					</select>
				</div>
			</div>
			<button type='submit' className='btn btn-primary'>
				Guardar
			</button>
		</form>
	);
};

const mapDispatchToProps = {
	updateEvent,
};

export default connect(null, mapDispatchToProps)(EditForm);
