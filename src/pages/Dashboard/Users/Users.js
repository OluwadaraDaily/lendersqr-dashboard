import './Users.scss'
import UserCard from '../../../components/UserCard/UserCard'

function Users() {
  const userCardDetails = [
    { cardTitle: 'Users', cardNumber: '2,345', imageName: 'users' },
    { cardTitle: 'Active Users', cardNumber: '2,345', imageName: 'active-users' },
    { cardTitle: 'Users With Loans', cardNumber: '2,345', imageName: 'users-with-loans' },
    { cardTitle: 'Users With Savings', cardNumber: '2,345', imageName: 'users-with-savings' },
  ]
  return (
    <div className='user-section-container'>
      <h1 className="title">Users</h1>
      <div className="user-analytics-cards">
        { userCardDetails.map((item) => (
          <UserCard imageName={item.imageName} cardNumber={item.cardNumber} cardTitle={item.cardTitle}/>
        ))}
      </div>
    </div>
  )
}

export default Users