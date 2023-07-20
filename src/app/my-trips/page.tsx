'use client'

import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Prisma, TripReservation } from '@prisma/client'
import UserReservationItem from './components/UserReservationItem'
import Button from '@/components/Button'
import Link from 'next/link'
import Loading from '../loading'
import { toast } from 'react-toastify'

const MyTrips = () => {
  const [reservations, setReservations] = useState<Prisma.TripReservationGetPayload<{
    include: {trip: true}
  }>[]>([])
  const [isLoading,setIsLoading] = useState(true)

  const {status, data} =useSession()
  const router = useRouter()

  const fetchReservations = async () => {
    const response = await fetch(`/api/user/${(data?.user as any)?.id}/reservations`)
    const json = await response.json()

    setReservations(json)
    setIsLoading(false)
  }
  
  useEffect(() => {
    try {

      if ( status === 'unauthenticated'){
        toast.error('Faça seu login')
       return router.push('/')
      }
  
      fetchReservations()
    } catch (error) {
      console.log('erro ao buscar as reservas')
      toast.error('Não foi possível encontrar suas reservas, por favor tente mais tarde!')
      setIsLoading(false)
    }

  }, [status])

  return (
    isLoading
    ?
      <Loading/>
    :
    <div className="container mx-auto p-5">
      <h1 className='font-semibold text-primaryDarker text-xl lg:mb-5'>Minhas viagens</h1>
      {reservations.length>0 
      ? 
       (
        <div className='flex flex-col lg:grid lg:grid-cols-3 lg:gap-14'>
          {
            reservations?.map( reservation => (
             <UserReservationItem key={reservation.id} reservation={reservation} fetchReservation={fetchReservations}/>
            ))    
          }
        </div>
       )    
      
      :
       <div className="flex flex-col container">
         <p className='font-medium text-primaryDarker mt-2'>Você ainda não tem nenhuma reserva! =(</p>

         <Link href="/">
          <Button className='w-full mt-2'>Fazer reserva</Button>
         </Link>
       </div>
      }
    </div>
  )
}

export default MyTrips