import { useNavigate, useParams, NavLink } from 'react-router-dom'
import './User.scss'
import { IoIosArrowRoundBack } from "react-icons/io";
import React, { useState, useEffect } from 'react';
import { getUser } from '../../../api/users'
import Rating from '@mui/material/Rating';



function User() {
  const { id } = useParams()
  const [user, setUser] = useState({})
  const [userId, setUserId] = useState(null)
  const navigate = useNavigate()
  const backIcon = React.createElement(IoIosArrowRoundBack)

  const handleBackToUsers = () => {
    navigate("/dashboard/users")
  }

  // API calls
  useEffect(() => {
    const getSingleUser = async () => {
      const response = await getUser(id)
      setUser(response)
    }
    getSingleUser();
    setUserId(id)
  }, [id])


  const personalInformation = [
    {
      title: 'Full Name',
      value: `${user?.profile?.firstName} ${user?.profile?.lastName}`
    },
    {
      title: 'Phone Number',
      value: user?.phoneNumber
    },
    {
      title: 'Email Address',
      value: user?.email
    },
    {
      title: 'BVN',
      value: '--'
    },
    {
      title: 'Gender',
      value: user?.profile?.gender
    },
    {
      title: 'Marital Status',
      value: '--'
    },
    {
      title: 'Children',
      value: '--'
    },
    {
      title: 'Type of Residence',
      value: '--'
    }
  ]

  const educationAndEmployment = [
    {
      title: 'Level of Education',
      value: user?.education?.level
    },
    {
      title: 'Employment Status',
      value: user?.education?.employmentStatus
    },
    {
      title: 'Sector of Employment',
      value: user?.education?.sector
    },
    {
      title: 'Duration of Employment',
      value: user?.education?.duration
    },
    {
      title: 'Office Email',
      value: user?.education?.officeEmail
    },
    {
      title: 'Monthly Income',
      value: `${Math.min(...(user?.education?.monthlyIncome || []))} - ${Math.max(...(user?.education?.monthlyIncome || []))}`
    },
    {
      title: 'Loan Repayment',
      value: user?.education?.loanRepayment
    }
  ]
  
  const socials = [
    {
      title: 'Twitter',
      value: user?.socials?.twitter
    },
    {
      title: 'Facebook',
      value: user?.socials?.facebook
    },
    {
      title: 'Instagram',
      value: user?.socials?.instagram
    }
  ]

  const guarantor = [
    {
      title: 'Full Name',
      value: `${user?.guarantor?.firstName} ${user?.guarantor?.lastName}`
    },
    {
      title: 'Phone Number',
      value: user?.guarantor?.phoneNumber
    },
    {
      title: 'Address',
      value: user?.guarantor?.address
    },
    {
      title: 'Relationship',
      value: '--'
    },
  ]

  return (
    <div className='user-container'>
      <div className="back-to-users" onClick={handleBackToUsers}>
        <i>{backIcon}</i>
        <p className='back-to-users__text'>Back to Users</p>
      </div>
      <div className="title-section">
        <h1 className="title">User Details</h1>
        <div className="action-btns">
          <button className="btn blacklist-btn">Blacklist User</button>
          <button className="btn activate-btn">Activate User</button>
        </div>
      </div>
      <div className="user-bio-tabs-section">
        <div className="bio-section">
          <div className="name-section">
            <div className="image-holder">
              <img src={user?.profile?.avatar} alt="" className="profile-img" />
            </div>
            <div className="name-and-id">
              <h1 className="name title">{user.userName}</h1>
              <p className='id'>{user.accountNumber}</p>
            </div>
          </div>
          <div className="users-tier">
            <p className="text">User's Tier</p>
            <Rating name="customized-10" defaultValue={1} max={3} />
          </div>
          <div className="account-details">
            <p className="account-balance">&#8358;{user.accountBalance}</p>
            <p className="account-info">{user.accountNumber}/Union Bank</p>
          </div>
        </div>
        <div className="tabs-section">
          <ul className="tabs-list">
            <li className="tab-item">
              <NavLink to={`/dashboard/users/${userId}`}>
                General Details
              </NavLink>
            </li>
            <li className="tab-item">Documents</li>
            <li className="tab-item">Bank Details</li>
            <li className="tab-item">Loans</li>
            <li className="tab-item">Savings</li>
            <li className="tab-item">App and System</li>
          </ul>

        </div>
      </div>
      <div className="user-details">
        <div className="user-details-section">
          <h1 className="title">Personal Information</h1>
          <div className="info-grid">
            {personalInformation.map((item, index) => (
              <div className="info-grid__info" key={index}>
                <p className="title">{item.title}</p>
                <p className="value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="user-details-section">
          <h1 className="title">Education and Employment</h1>
          <div className="info-grid">
            {educationAndEmployment.map((item, index) => (
              <div className="info-grid__info" key={index}>
                <p className="title">{item.title}</p>
                <p className="value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="user-details-section">
          <h1 className="title">Socials</h1>
          <div className="info-grid">
            {socials.map((item, index) => (
              <div className="info-grid__info" key={index}>
                <p className="title">{item.title}</p>
                <p className="value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="user-details-section">
          <h1 className="title">Guarantor</h1>
          <div className="info-grid">
            {guarantor.map((item, index) => (
              <div className="info-grid__info" key={index}>
                <p className="title">{item.title}</p>
                <p className="value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default User