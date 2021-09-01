import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { updateParade } from '../../actions/parades';

const EditForm = (props) => {
	const { parade, elements } = props;

	const { register, handleSubmit } = useForm({
		defaultValues: {
			id: parade.id,
		},
	});

	const onSubmit = (data) => props.updateParade(data);

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
						defaultValue={parade.name}
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
						defaultValue={parade.date}
					/>
				</div>
			</div>
			<div className='form-group col-6'>
				<label htmlFor='designer'>Diseñador</label>
				<select
					{...register('idDesigner')}
					className='form-control'
					defaultValue={parade.idDesigner}
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
				Guardar
			</button>
		</form>
	);
};

const mapDispatchToProps = {
	updateParade,
};

export default connect(null, mapDispatchToProps)(EditForm);
