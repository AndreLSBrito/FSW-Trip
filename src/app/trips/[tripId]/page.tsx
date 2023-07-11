import { prisma } from '@/lib/prisma'
import React from 'react'
import TripHeader from './components/TripHeader'
import TripReservation from './components/TripReservation'
import TripDescription from './components/TripDescription'
import TripHightlights from './components/TripHighlights'
import TripLocation from './components/TripLocation'

const getTripDetails = async (tripId:string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId
    }
  })

  return trip
}

const TripDetails = async ({params}: {params: {tripId:string}}) => {
  const trip = await getTripDetails(params.tripId)
  
  if(!trip) return null

  return (
    <div className="container mx-auto">
      <TripHeader trip={trip}/>

      <TripReservation 
        maxGuests={trip.maxGuests}  
        pricePerDay={trip.pricePerDay as any} 
        tripEndDate={trip.endDate} 
        tripId={trip.id}
        tripStartDate={trip.startDate}  
      />
      <TripDescription description={trip.description}/>
      <TripHightlights hightlights={trip.highlights}/>
      <TripLocation location={trip.location} locationDescription={trip.locationDescription}/>
    </div>
  )
}

export default TripDetails