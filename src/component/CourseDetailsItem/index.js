import './index.css'

const CourseDetailsItem = props => {
  const {courseItemDetails} = props
  const {name, description, imageUrl} = courseItemDetails

  return (
    <li className="list-container">
      <div className="content-container">
        <img src={imageUrl} alt={name} className="course-image" />
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    </li>
  )
}

export default CourseDetailsItem
