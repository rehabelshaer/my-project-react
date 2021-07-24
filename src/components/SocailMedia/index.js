import React ,{useState , useEffect} from 'react';
import axios from 'axios';
import './style.css'

const SocailMedia = ()=>{ 


    const [social , setsocial] = useState([])
    useEffect( ()=>{
      axios.get('json/data.json').then(res => { setsocial(res.data.social) })
  
    }, [])
    
    const socialList = social.map( (socialItem)=>{

      return(
      
          <div className="social"  key={socialItem.id}>
                <i className={socialItem.icon}></i>
                <div>
                <h2 className="info1">{socialItem.title}</h2>
                <h4 className="info2">{socialItem.body}</h4>
                </div>
          </div>     
      
      )

    }) 

    return (
    <div className="social-media">
      {socialList}
    </div>
    )
 }
export default SocailMedia;

