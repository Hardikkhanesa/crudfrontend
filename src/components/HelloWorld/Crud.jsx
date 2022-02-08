/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useForm } from 'react-hook-form'
import API from '../../../axios'

// The following component is an example of your existing Input Component
const Input = ({ label, register, required }) => (
	<>
		<label>{label}</label>
		<input {...register(label, { required })} />
	</>
)

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
	<>
		<label>{label}</label>
		<select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
			<option value='20'>20</option>
			<option value='30'>30</option>
		</select>
	</>
))

const Crud = () => {
	// const { register, handleSubmit } = useForm()
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm()

	const onSubmit = (data) => {
		console.log(JSON.stringify(data))

		const res = API.post(`api/core/create/`, data)
		if (res.status === 200) {
			console.log(res)
		}
	}
	const update = (data) => {
		console.log(JSON.stringify(data))

		const res = API.post(`api/core/update/`, data)
		if (res.status === 200) {
			console.log(res)
		}
	}

	// const delete = (data) => {
	// 	console.log(JSON.stringify(data))

	// 	const res = API.post(`api/core/update/`, data)
	// 	if (res.status === 200) {
	// 		console.log(res)
	// 	}
	// }

	return (
		<>
			Create

			<form onSubmit={handleSubmit(onSubmit)}>
				Name:
				<input {...register('name', { required: true })} />
				{errors.name?.type === 'required' && 'name is required'}
				<br />
				Email :<input type='email' {...register('email', { required: true })} />
				{errors.email && 'Email is required'}
				<br />
				Phone :<input type='number' {...register('phone', { required: true, maxLength: 10, minLength: 10 })} />
				{errors.phone && 'phone is required with 10 digit length'}
				<br />
				Date of birth :<input type='date' {...register('date_of_birth', { required: true })} />
				{errors.date_of_birth && 'date_of_birth is required'}
				<br />
				Gender :<input {...register('gender', { required: true })} />
				{errors.gender && 'gender is required'}
				<br />
				<input type='submit' />
			</form>
			<br />
			<br />
			Update
			<form onSubmit={handleSubmit(update)}>
				Name:
				<input {...register('name', { required: true })} />
				{errors.name?.type === 'required' && 'name is required'}
				<br />
				Email :<input type='email' {...register('email', { required: true })} />
				{errors.email && 'Email is required'}
				<br />
				Phone :<input type='number' {...register('phone', { required: true, maxLength: 10, minLength: 10 })} />
				{errors.phone && 'phone is required with 10 digit length'}
				<br />
				Date of birth :<input type='date' {...register('date_of_birth', { required: true })} />
				{errors.date_of_birth && 'date_of_birth is required'}
				<br />
				Gender :<input {...register('gender', { required: true })} />
				{errors.gender && 'gender is required'}
				<br />
				<input type='submit' />
			</form>

			<br />
			<br />
			{/* Delete
			<form onSubmit={handleSubmit(delete)}>
				
				Email :<input type='email' {...register('email', { required: true })} />
				{errors.email && 'Email is required'}
				<br />
				
				<input type='submit' />
			</form> */}
		</>
	)
}

export default Crud
