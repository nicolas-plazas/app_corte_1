import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addPavilion } from '../../actions/pavilion';

const AddForm = (props) => {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			id: uuidv4(),
		},
	});
	const onSubmit = (data) => props.addPavilion(data);

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
						required
					/>
				</div>
				<div className='form-group col-6'>
					<label htmlFor='finishDate'>Empleado</label>
					<select {...register('employeeId')} className='form-control' required>
						{props.employees.map((employee) => {
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
	addPavilion,
};

export default connect(null, mapDispatchToProps)(AddForm);
