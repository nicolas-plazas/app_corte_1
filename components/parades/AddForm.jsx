import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addParade } from '../../actions/parades';

const AddForm = (props) => {
	const { elements } = props;

	const { register, handleSubmit } = useForm({
		defaultValues: {
			id: uuidv4(),
		},
	});
	const onSubmit = (data) => props.addParade(data);

	return (
		<form className='bg-white p-5' onSubmit={handleSubmit(onSubmit)}>
			<h2>Editar desfile</h2>
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
					<label htmlFor='inputDate'>Fecha</label>
					<input
						type='date'
						className='form-control'
						id='inputDate'
						{...register('date')}
					/>
				</div>
			</div>
			<div className='form-group col-6'>
				<label htmlFor='designer'>Diseñador</label>
				<select
					{...register('idDesigner')}
					className='form-control'
					required
				>
					{elements.designers.map((designer) => {
							return (
								<option key={`dis-${designer.id}`} value={designer.id}>
									{designer.name}
								</option>
							);
						})}
				</select>
			</div>
			<button type='submit' className='btn btn-primary'>
				Crear
			</button>
		</form>
	);
};

const mapDispatchToProps = {
	addParade,
};

export default connect(null, mapDispatchToProps)(AddForm);
