import Greetings from './Greetings'
import DashboardCard from './DashboardCard'
import TotalPickup from './TotalPickup'
import MissedCollection from './MissedCollection'
import History from './History'

export default function Dashboard(name,tokens,fullName,pickUps,missed){
    return (
        <>
      <Greetings name={'Elo'} />
      <DashboardCard tokens={tokens}
      fullname={fullName} />
      <TotalPickup pickUps={pickUps} />
      <MissedCollection missed={missed}/>
      <History />
        <button className='createPickup' formAction='post'>+</button>
        </>
    )
}