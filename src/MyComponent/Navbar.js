import React from 'react'
import leftarrow from '../MyImages/leftarrow.svg'
import rightarrow from '../MyImages/rightarrow.svg'

const Navbar = () => {
  return (
    <>
        <div className='d-flex align-items-center justify-content-between'>
            <div className=' left_right_arrows w-25'>
                <button><img src={leftarrow} alt="" /></button>
                <button><img src={rightarrow} alt="" /></button>
            </div>
                <div className='d-flex justify-content-between w-50 align-items-center py-2' >
                    <span>Premium</span>
                    <span>Support</span>
                    <span>Download</span>
                    <span> | </span>
                    <span>Sign-up</span>
                    <button className='btn btn-light p-3 login_button'>Log in</button>
                </div>
        </div>
    </>
  )
}

export default Navbar