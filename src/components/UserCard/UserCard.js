import './UserCard.scss'

function UserCard({ imageName, cardTitle, cardNumber }) {
  return (
    <div className='user-card-container'>
      <img src={`${process.env.PUBLIC_URL}/images/${imageName}.svg`} alt="" />
      <p className="card-title">{ cardTitle }</p>  
      <p className="card-number">{ cardNumber }</p>  
    </div>
  )
}

export default UserCard