import React from 'react'
import { NavLink } from 'react-router-dom'

const ListItem = ({listname,href,className}) => {
  return (
    <NavLink to={href}>
    <li className={className}>{listname}</li>
    </NavLink>
  )
}

export default ListItem