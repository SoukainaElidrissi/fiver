import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
            <h1>Hire & find Jobs</h1>
          </div>
        <div className="search">
           <div className="searchInput">
            <img src="./img/search.png" alt=""/>
            <input type="text" placeholder="Search for Any Service ....."/>
           </div>
           <button>Search</button>
           
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        

       
        
       
         <div className="right">
            <img src="./img/man.jpg" alt=""/>

         
        </div>
        </div>
      
    </div>
  )
}

export default Featured
