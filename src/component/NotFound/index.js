import Header from '../Header'

import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png "
        alt="not found"
        className="image"
      />
      <h1 className="heading">Page Not found</h1>
      <p className="para">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotFound
