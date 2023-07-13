"use client"

import Button from '@/components/Button'
import CurrencyInput from '@/components/CurrencyInput'
import DatePicker from '@/components/DatePicker'
import Input from '@/components/Input'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

interface TripSearchForm{
  text: string;
  startDate: Date | null;
  budget: string
}

const TripSearch = () => {

  const router = useRouter()

  const {control, register, handleSubmit, formState: {errors}} = useForm<TripSearchForm>()

  const onSubmit = (data: TripSearchForm) => {
    router.push(`/trips/search?text=${data.text}&startDate=${data.startDate?.toISOString()}&budget=${data.budget}`)
  }

  return (
    <div className='container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat'>
      <h1 className='font-semibold text-2xl text-primaryDarker text-center'>
        Encontre sua próxima <span className='text-primary'>viagem!</span>
      </h1>

      <div className="flex flex-col gap-4 mt-5">
        <Input 
          placeholder='Onde você quer ir?' 
          error={!!errors.text}
          errorMessage={errors.text?.message}
          {...register("text", {
            required: {
              value: true,
              message: "Texto é obrigatório"
            }
          })}
        />

        <div className="flex gap-4 ">
        <Controller
          name="startDate"
          control={control}
          render={({ field }) => (
            <DatePicker
							dateFormat="dd/MM/yyyy"
              onChange={field.onChange}
              selected={field.value}
              placeholderText="Data de ida"
              className="w-full"
              minDate={new Date()}
            />
          )}
        />

        <Controller
          name="budget"
          control={control}
          render={({ field }) => (
            <CurrencyInput placeholder='Orçamento' allowDecimals={false} onValueChange={(value) => field.onChange} value={field.value} onBlur={field.onBlur}/>
          )}
        />
        </div>

        <Button onClick={() => handleSubmit(onSubmit)()}>Buscar</Button>
      </div>

    </div>
  )
}

export default TripSearch