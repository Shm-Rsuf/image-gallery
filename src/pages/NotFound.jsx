import { Link } from "react-router-dom"
import error404 from "../../public/images/error-404-Page.gif"

const NotFound = () => {
  return (
    <div>
      <Link to="/">
        <img src={error404} alt="not found image"/>
      </Link>
    </div>
  )
}

export default NotFound