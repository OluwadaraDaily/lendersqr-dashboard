import './AllUsers.scss'
import UserCard from '../../../components/UserCard/UserCard'
import { getAllUsers } from '../../../api/users'
import { useEffect, useState } from 'react'
import Table from '../../../components/Table/Table'
import { useNavigate } from 'react-router-dom'

function Users() {
  const [users, setUsers] = useState([])
  const [numberOfUsers, setNumberOfUsers] = useState(0)
  const userCardDetails = [
    { cardTitle: 'Users', cardNumber: numberOfUsers, imageName: 'users' },
    { cardTitle: 'Active Users', cardNumber: '2,345', imageName: 'active-users' },
    { cardTitle: 'Users With Loans', cardNumber: '2,345', imageName: 'users-with-loans' },
    { cardTitle: 'Users With Savings', cardNumber: '2,345', imageName: 'users-with-savings' },
  ]
  const navigate = useNavigate()
  // API calls
  useEffect(() => {
    const fetchAllUsers = async () => {
      const response = await getAllUsers()
      setUsers(response)
      setNumberOfUsers(response.length)
    }
    fetchAllUsers();
  }, [])

  const handleViewDetails = (rowId) => {
    navigate(`/dashboard/users/${rowId}`)
  }
  return (
    <div className='user-section-container'>
      <h1 className="title">Users</h1>
      <div className="user-analytics-cards">
        { userCardDetails.map((item, index) => (
          <UserCard 
            key={index}
            imageName={item.imageName}
            cardNumber={item.cardNumber} 
            cardTitle={item.cardTitle}
          />
        ))}
      </div>
      <div className="users-list">
        <Table tableData={users.splice(0,10)} handleViewDetails={handleViewDetails}/>
      </div>
    </div>
  )
}

export default Users