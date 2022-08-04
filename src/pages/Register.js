import React from 'react'
import LoginOrRegisterForm from '../component/LoginOrRegisterForm'

export default function Register() {
  return (
    <div style={{
      width: '100%',
      height: '1200px',
      margin: 'auto',
      background: 'lightgrey' ,
      padding: '15em'

  }}>
    <LoginOrRegisterForm loginOrRegister={"register"} />
  </div>

  )
}
