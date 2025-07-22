import { useParams } from "react-router"

export default function UserDetail() {

  const paramsData=useParams();
  console.log(paramsData);
  

  return (
    <div style={{ marginLeft: 20 }}>
<h1>User Detail Page</h1>
<h2>User ID is: {paramsData.id}</h2>
    </div>
  )
}