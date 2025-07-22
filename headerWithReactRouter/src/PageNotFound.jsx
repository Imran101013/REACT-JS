import { Link } from "react-router"

export default function PageNotFound() {
  return (
    <div style={{textAlign:'center'}}>
      <h1>Page Not Found</h1>
      <div>
        <Link to="/">Go To Home</Link>
      </div>
      <img src="src/assets/images.jpg" alt="" />
      </div>
  )
}