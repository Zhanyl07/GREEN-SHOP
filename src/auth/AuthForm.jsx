import React from 'react'
import { Link } from 'react-router-dom'
import './AuthForm.scss'
function AuthForm({onClose}) {
  return (
    <div className='login'>
        {/* <button className="modal-close" onClick={onClose}>×</button>

        <div className="link">
            <Link to={'/login'}>
            Login
            </Link>
            <div className="line">
            I
            </div>
            <Link to={'/register'}>
            Register
            </Link>

        </div> */}

    </div>
  )
}

export default AuthForm
