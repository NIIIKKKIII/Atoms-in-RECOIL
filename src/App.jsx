import { useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";
import { networkAtom, jobsAtom, notificationAtom, messagingAtom } from "./Store/Atoms"

function App(){
  return (
<RecoilRoot>
    <Mainapp/>
  </RecoilRoot>
  ) 

};


function Mainapp(){
  const NetworkNotificationCount = useRecoilValue(networkAtom)
  const JobsAtomCount = useRecoilValue(jobsAtom)
  const NotificationCount = useRecoilValue(notificationAtom)
  const MessagingCount = useRecoilValue(messagingAtom)
  // just a learning that in order to get the value of MessagingCount updated with a new button add we can do 
//   const [MessagingCount, setMessagingCount] = useRecoilState(messagingAtom)
// as useSetRecoilState takes two values one to update and one the actual 

// and add a button in the last call it add 
  return ( <>
<button>Home{}</button>
    <button>My network{NetworkNotificationCount >=100 ? "99+" : NetworkNotificationCount}</button>
    <button>Jobs {JobsAtomCount}</button>
    <button>Notifications{NotificationCount}</button>
    <button>Messaging {MessagingCount}</button>
    
    {/* <button onClick={()=>(setMessagingCount(MessagingCount+1))}>Add Message</button> */}

  
  </>)
    
}

// if you just want to uodate anything and not want the actual state value of it then we use UsesetRecoilState
export default App;