import Greetings from './Greetings'
import DashboardCard from './DashboardCard'
import TotalPickup from './TotalPickup'
import MissedCollection from './MissedCollection'
import History from './History'
import Barchart from './Barchart'
export default function Dashboard({name,tokens,fullName,pickUps,missed}){
    return (
        <>
      <Greetings name={'Elo'} />
      <DashboardCard fullName={'Ezeaneche Elochukwu'} 
      tokens={0} />
     <TotalPickup pickUps={0} />
      <MissedCollection missed={0}/>
      <Barchart />
      {/* <History /> */}
        <button className='createPickup' formAction='post'>+</button>
        </>
    )
}