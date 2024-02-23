import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Body = () => {
    const [songs, setSongs] = useState([]);
  ;
  
    useEffect(() => {
      axios.get('https://robo-music-api.onrender.com/music/my-api')
        .then(response => {
          setSongs(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
   
  
  return (
    <>
        <div className='body_songlist'>

            <div>
            <h1>Music Player</h1>
            <div className='d-flex flex-wrap w-100 justify-contents-between overflow-auto bodysongs'>
            
                {
                songs.map(songs => (
               
               <div className="card m-3" style={{width : "16rem"}}>
         
                        <img src={songs.songImage} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{songs.songTitle}</h5>
                                <p className="card-text">{songs.releaseDate}</p>
                                <a href="#" className="btn btn-primary">PLAY</a>
                            </div>
            </div>

                ))
                }
                </div>
           
           
            </div>

        </div>
    </>
  )
}

export default Body