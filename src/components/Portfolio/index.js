import React ,{useState , useEffect} from 'react';
import axios from 'axios';
import './style.css'



const Portfolio =() =>{ 

  const[images , setImages] = useState([])

  useEffect( ()=>{
    axios.get('json/data.json').then(res => { setImages(res.data.portfolio) })

  }, [])
 
     const portfolioImage = images.map( (imageItem )  =>{

      return(

        <div className="box-item" key={imageItem.id}>
            <img  className="image" src={imageItem.image}  alt=""/>
                <p className="overlay">
                    <span>
                            Show Image
                    </span>
                </p>
       </div>

      )

     })

  return (
    <div className="portfolio">
            <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
            <ul className="portfolio-list">
                <li className="portfolio-item active">All</li>
                <li className="portfolio-item">HTML</li>
                <li className="portfolio-item">Photoshop</li>
                <li className="portfolio-item">Wordpress</li>
                <li className="portfolio-item">Mobile</li>
            </ul>
            
            <div className="box">
            {portfolioImage}
            </div>
            
        </div>

  )
 }

export default Portfolio;
