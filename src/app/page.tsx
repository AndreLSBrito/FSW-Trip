import QuickSearch from "./components/QuickSearch"
import RecomendedTrips from "./components/RecomendedTrips"
import TripSearch from "./components/TripSearch"


export default function Home() {

  return (
    <div>
      <TripSearch/>
      <QuickSearch/>
      <RecomendedTrips/>
    </div>
  
  )
}
