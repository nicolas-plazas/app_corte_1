import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { updatePavilion } from '../../actions/pavilion';

const EditForm = (props) => {
	const { pavilion, elements } = props;

	console.log(pavilion.id);
	const { register, handleSubmit } = useForm({
		defaultValues: {
			id: pavilion.id,
		},
	});

	const onSubmit = (data) => props.updatePavilion(data);

	return (
		<form className='bg-white p-5' onSubmit={handleSubmit(onSubmit)}>
			<h2>Editar Pabellón</h2>
			<div className='row'>
				<div className='form-group col-6'>
					<label htmlFor='inputName'>Nombre</label>
					<input
						className='form-control'
						id='inputName'
						placeholder='Nombre'
						{...register('name')}
						defaultValue={pavilion.name}
						required
					/>
				</div>
				<div className='form-group col-6'>
					<label htmlFor='finishDate'>Empleado</label>
					<select
						{...register('employeeId')}
						className='form-control'
						defaultValue={pavilion.employeeId}
						required
					>
						{elements.employees.map((employee) => {
							return (
								<option key={`emp-${employee.id}`} value={employee.id}>
									{employee.name}
								</option>
							);
						})}
					</select>
				</div>
				<div className='form-group'>
					<label htmlFor='inputPhone'>Teléfono</label>
					<input
						type='number'
						className='form-control'
						id='inputPhone'
						{...register('phone')}
						defaultValue={pavilion.phone}
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
	updatePavilion,
};

export default connect(null, mapDispatchToProps)(EditForm);
