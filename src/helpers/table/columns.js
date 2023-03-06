import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'Id',
    accessor: "id"
  },
  {
    Header: 'Organization',
    accessor: "orgName"
  },
  {
    Header: 'Username',
    accessor: "userName"
  },
  {
    Header: 'Email',
    accessor: "email"
  },
  {
    Header: 'Phone Number',
    accessor: "phoneNumber"
  },
  {
    Header: 'Date Joined',
    accessor: "lastActiveDate",
    Cell: ({ value }) => { return format(new Date(value), 'MMM ii, yyyy p') },
  },
]