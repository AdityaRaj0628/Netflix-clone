import React from 'react'
import { UserAuth } from '../Context/AuthContext'
import {Navigate} from "react-router-dom"

function ProctedRoute({children}) {
const {user}=UserAuth()

if(!user){
    return <Navigate to="/"/>
}
  return children
}

export default ProctedRoute