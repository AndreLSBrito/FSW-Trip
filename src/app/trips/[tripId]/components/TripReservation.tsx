"use client"

import Button from '@/components/Button'
import DatePicker from '@/components/DatePicker'
import Input from '@/components/Input'
import { Trip } from '@prisma/client'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'

interface TripReservationProps {
	trip: Trip;
}

interface TripReservationForm {
	guests: number;
	startDate?: Date | null
	endDate?: Date | null
}
const TripReservation = ({trip}: TripReservationProps) => {
	const {register, handleSubmit,control, formState: {errors}, watch} = useForm<TripReservationForm>()

	const onSubmit = (data: any) => {

	}

	const startDate = watch('startDate')
	const endDate = watch('endDate')

  return (
		<div className="flex flex-col px-5">
			<div className="flex gap-4">
				<Controller
					control={control}
					name="startDate"
					rules={{
						required: {
							value: true,
							message: 'Data inicial é obrigatória'
						}
					}}
					render={({field}) => (
						<DatePicker 
							error={!!errors?.startDate}
							errorMessage={errors?.startDate?.message}
							placeholderText='Data de início' 
							onChange={field.onChange} 
							selected={field.value} 
							className='w-full'
							minDate={trip.startDate}
							maxDate={endDate ?? trip.endDate}					
						/>	
						)}
				/>

				<Controller
					control={control}
					name="endDate"
					rules={{
						required: {
							value: true,
							message: 'Data final é obrigatória'
						}
					}}
					render={({field}) => (
						<DatePicker 
							placeholderText='Data final' 
							className='w-full' 
							error={!!errors?.endDate}
							errorMessage={errors?.endDate?.message}
							onChange={field.onChange} 
							selected={field.value} 
							minDate={startDate ?? trip.startDate}
							maxDate={trip.endDate}
						/>
					)}
				/>
				
			</div>

			<Input 
				{...register('guests', {
					required: {
						value: true,
						message: 'Número de hóspedes é obrigatório'
					}
				})}
				placeholder={`Número de hóspedes (max: ${trip.maxGuests})`}
				className='mt-4'
				error={!!errors.guests}
				errorMessage={errors?.guests?.message}
			/>

			<div className="flex justify-between mt-3">
				<p className="font-medium text-sm text-primaryDarker">Total:</p>
				<p className="font-medium text-sm text-primaryDarker">R$ 2500</p>
			</div>

			<div className="pb-10 border-b border-grayLighter w-full">
				<Button onClick={() => handleSubmit(onSubmit)()} className='mt-3 w-full'>Reservar agora</Button>
			</div>
		</div>
  )
}

export default TripReservation