import Image from 'next/image'
import React from 'react'

interface HightlightsDescriptionProps {
  hightlights: string[]
}

const TripHightlights = ({hightlights}: HightlightsDescriptionProps) => {
  return (
    <div className="flex flex-col p-5">
      <h2 className='font-semibold text-primaryDarker mb-2'>Destaques</h2>
      <div className="flex flex-wrap gap-y-3">
        {hightlights.map((hightlights, index) => (
          <div key={hightlights} className="flex item-center gap-2 w-1/2">
            <Image src="/check-icon.png" width={15} height={15} alt={hightlights}/>

            <p className='text-grayPrimary text-xs '>{hightlights}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TripHightlights