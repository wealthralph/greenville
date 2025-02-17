import Greetings from './Greetings'
import DashboardCard from './DashboardCard'
import TotalPickup from './TotalPickup'
import MissedCollection from './MissedCollection'
import History from './History'

export default function Dashboard(){
    return (
        <>
      <Greetings />
      <DashboardCard />
      <TotalPickup />
      <MissedCollection />
      <History />
        <button className='createPickup' formAction='post'>+</button>
        </>
    )
}