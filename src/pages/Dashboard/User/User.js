import { useParams } from 'react-router-dom'
import './User.scss'

function User() {
  const { id } = useParams()
  return (
    <div className='user-container'>
      <p>User with ID: {id}</p>
      
    </div>
  )
}

export default User