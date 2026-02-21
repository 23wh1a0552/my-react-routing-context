import { TextField } from '@mui/material'
import React from 'react'

const ChangePassword = () => {
  return (
    <>
        <TextField variant='filled' label='Old Password'
        type='password'/>
        <TextField variant='standard' label='New Password'
        type='password'/>
        <TextField variant='outlined' label='Retype Password'
        type='password'/>
        
    </>
  )
}

export default ChangePassword