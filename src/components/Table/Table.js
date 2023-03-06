import React, { useCallback, useEffect, useState } from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'
import { COLUMNS } from '../../helpers/table/columns'
import { useMemo } from 'react'
import './Table.scss'
import { BsFilter } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
import viewDetailsImg from '../../images/eye.svg'
import blacklistUserImg from '../../images/delete-user.svg'
import activateUserImg from '../../images/approve-user.svg'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Table({ tableData = [], handleViewDetails }) {
  const [moreOptionsStatus, setMoreOptionsStatus] = useState({})
  const [activePage, setActivePage] = useState({})
  const [pageNumbersArray, setPageNumbersArray] = useState([])
  let initialPageState = useMemo(() => {return {}}, [])

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => tableData, [tableData])
  
  const tableInstance = useTable({
    columns,
    data
  }, useSortBy, usePagination)

  const { 
    getTableProps,
    getTableBodyProps,
    page,
    nextPage,
    canNextPage,
    canPreviousPage,
    previousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    headerGroups,
    prepareRow } = tableInstance
  
  const { pageIndex } = state


  const filterIcon = React.createElement(BsFilter)
  const moreOptions = React.createElement(SlOptionsVertical)
  const previousArrow = React.createElement(IoIosArrowBack)
  const nextArrow = React.createElement(IoIosArrowForward)

  const setInitialState = useCallback(() => {
    for(let i = 0; i <= tableData.length; i++) {
      setMoreOptionsStatus((prevState) => {
        prevState[i] = false
        return {...prevState}
      })
    }
  }, [tableData])

  const range = useCallback((start, end) => {
    if(start === end) return [start];
    return [start, ...range(start + 1, end)];
  }, [])

  useEffect(() => {
    for(const i of pageNumbersArray) {
      initialPageState[i] = false
    }
    setActivePage(initialPageState)
    setActivePage(prevState => {
      prevState = prevState || {}
      prevState[Number(pageIndex) + 1] = true
      return {...prevState}
    })
  }, [pageIndex, initialPageState, pageNumbersArray])
  
  useEffect(() => {
    setInitialState()
  }, [setInitialState])

  useEffect(() => {
    setPageNumbersArray(range(1, pageCount || 1))
  }, [pageCount, range])
  
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
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')} <span className='filter-icon'><i>{filterIcon}</i></span></th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
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
      <div className="below-table">
        <div className="items-shown">
          <p>Page {pageIndex + 1} of {pageOptions.length}</p>
          <p>Showing</p>
          <select>
            <option value="100" selected>100</option>
          </select>
          <p>out of 100</p>
        </div>
        <div className="navigate-table">
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>{ previousArrow }</button>
          {pageNumbersArray.map((item, index) => (
            <button key={index} className={activePage[item] ? "page-numbers active" : "page-numbers inactive"} onClick={() => gotoPage(item - 1)}>{ item }</button>
          ))}
          <button onClick={() => nextPage()} disabled={!canNextPage}>{ nextArrow }</button>
        </div>
      </div>
    </>
  )
}

export default Table