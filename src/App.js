import React from 'react'
import Sidebar from './MyComponent/Sidebar'
import Navbar from './MyComponent/Navbar'
import Body from './MyComponent/Body'
import Footer from './MyComponent/Footer'

const App = () => {
  return (
    <>
      <div className='container-fluid bg-black text-white'>
          <div className=' row d-flex'>
                <div className='col-3' >
                  <Sidebar/>
                </div>
              <div className='col-9'>
                  <Navbar/>
                  <Body/>
              </div>
          </div>
          
        
      </div>
      <Footer/>
    </>
  )
}

export default App