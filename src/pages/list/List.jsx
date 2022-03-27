import React from 'react'
import Datatable from '../../components/datatable/Datatable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./list.scss"

export const List = () => {
  return (
        // df width:100%
    <div className="list">
      <Sidebar />
            {/* flex 6 */}
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}
