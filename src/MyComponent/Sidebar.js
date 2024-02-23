import React from 'react'
import logo from '../MyImages/just logo.svg'
import home from '../MyImages/homeo r house.svg'
import search from '../MyImages/search icon.svg'
import library from '../MyImages/library.svg'
import plus from '../MyImages/plus.svg'

const Sidebar = () => {
  return (
    <>
      
            <div className=''>
                <div className=''>
                    <div className='d-flex justify-content-around w-25 my-3'>
                        <img className='img responsive logo_spotify' src={logo} alt="spotify logo" />
                        <h5> Spotify</h5>
                    </div>
                    <div className='d-flex align-items-center justify-content-around w-25 my-3'>
                        <img src={home} alt="" />
                        <h5> Home</h5>
                    </div>
                    <div className='d-flex align-items-center justify-content-around w-25 my-3'>
                        <img src={search} alt="" />
                        <h5>Search</h5>
                    </div>
                    <div className='d-flex align-items-center justify-content-between w-75 my-5'>
                       <div className='d-flex ms-3'>
                        <img className='library_logo' src={library} alt="" />
                            <h5>Library</h5>
                       </div>
                       <img src={plus} alt="" />

                    </div>

                    <div className='row'>
                        <div className='col-4 p-3 w-75 create_playlist'>
                            <h5>Create your first Playlist</h5>
                            <p>Its easy, we'll help you</p>
                           <button className='btn btn-light'>Create playlist</button>

                        </div>
                    </div>
                    <div className='row my-2'>
                        <div className='col-4 p-3 w-75 create_podcasts'>
                            <p>Let's find some podcasts to follow</p>
                            <p>We'll keep you updated on new episodes</p>
                           <button className='btn btn-light'>Browse Podcasts</button>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4 p-3 w-50 d-flex flex-wrap legal_links_and_co'>
                                <span>Legal</span>
                                <span>PrivacyCenter</span>
                                <span>PrivacyPolicy</span>
                                <span>CookiesSetting</span>
                                <span>AboutAds</span>
                                <span>Accessibilities</span>
                                <span>Cookies</span>

                        </div>

                    </div>

                    <div className='row'>
                        <div className='col-4 p-3'>
                            <button className='btn btn-light english_button'>ENGLISH</button>

                        </div>

                    </div>
                </div>

            </div>
       
    </>
  )
}

export default Sidebar