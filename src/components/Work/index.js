import React ,{Component} from 'react';
import './style.css'
import axios from 'axios';

class Work extends Component{

    state={
        works :[]
    }

    componentDidMount(){
        axios.get('json/data.json').then(res => {this.setState( {works : res.data.works} )})
    }

    render(){ 

        const {works} = this.state;
        const workList = works.map((workItem) =>{

            return(
            <div className="work-box" key={workItem.id}>
                <div className="part first" key={workItem.id}>
               <i className={workItem.icon_name}> </i>
                <h4>{workItem.title}</h4>
                <hr className="line" />
                <p className="parg">
                    {workItem.body} 
                </p>
            </div> 
            </div>
            )

        })


  return (
    <div className="work">
            <div className="container">
                <h2 className="work-title"><span>My</span> Work</h2>
                {workList}
            </div>
        </div>
  )
 }
}
export default Work;
