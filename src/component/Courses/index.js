import './index.css'
import {Link} from 'react-router-dom'

const Courses = props => {
  const {coursesDetails} = props
  const {name, logoUrl, id} = coursesDetails
  return (
    <Link to={`/courses/${id}`} className="link">
      <li className="list">
        <img src={logoUrl} alt={name} className="logo-url" />
        <p className="course-name">{name}</p>
      </li>
    </Link>
  )
}
export default Courses
