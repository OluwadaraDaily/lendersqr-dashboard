import React, { useCallback, useEffect, useState } from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from '../../helpers/table/columns'
import { useMemo } from 'react'
import './Table.scss'
import { BsFilter } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
import viewDetailsImg from '../../images/eye.svg'
import blacklistUserImg from '../../images/delete-user.svg'
import activateUserImg from '../../images/approve-user.svg'

function Table({ tableData = [], handleViewDetails }) {
  const [moreOptionsStatus, setMoreOptionsStatus] = useState({})
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => tableData, [tableData])
  const tableInstance = useTable({
    columns,
    data
  })

  const { getTableProps, getTableBodyProps, rows, headerGroups, prepareRow } = tableInstance
  const filterIcon = React.createElement(BsFilter)
  const moreOptions = React.createElement(SlOptionsVertical)

  const setInitialState = useCallback(() => {
    for(let i = 0; i <= tableData.length; i++) {
      setMoreOptionsStatus((prevState) => {
        prevState[i] = false
        return {...prevState}
      })
    }
  }, [tableData])

  useEffect(() => {
    setInitialState()
  }, [setInitialState])
  
  const handleMoreOptionsOnClick = (index) => {
    setInitialState()
    setMoreOptionsStatus((prevState) => {
      prevState[index] = true
      return {
        ...prevState
      }
    })
  }

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')} <span className='filter-icon'><i>{filterIcon}</i></span></th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
              <td className='more-options' onClick={() => handleMoreOptionsOnClick(index)}>
                <i>{moreOptions}</i>
                {moreOptionsStatus[index] &&
                  <div className="more-options-menu">
                    <div className='more-options__menu-item' onClick={() => handleViewDetails(row.cells[0].value)}>
                      <img src={viewDetailsImg} alt="eye icon" height={15}/>
                      <p>View Details</p>
                    </div>
                    <div className='more-options__menu-item'>
                      <img src={blacklistUserImg} alt="blacklist user icon" height={15} />
                      <p>Blacklist User</p>
                    </div>
                    <div className='more-options__menu-item'>
                      <img src={activateUserImg} alt="activate user icon" height={15} />
                      <p>Activate User</p>
                    </div>
                  </div>
                }
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table