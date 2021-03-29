import React, { Component } from 'react'
import axios from 'axios'
export class ShowMentorOfStudent extends Component {
    constructor(props){
        super(props)

        this.state={
            mentor:[]
        }
    }

    componentDidMount(){
        let id=this.props.match.params.id
        console.log("id",id)
        axios.put(`http://localhost:4000/api/students/${id}/assignMentor`).then((res)=>{
        console.log(res)
          if(res.data){
             
               this.setState({
                mentor:res.data.result.mentor
               })
              console.log("state",this.state.mentor)
          }
      })
    }
    render() {
        return (
            <div className="container">
             {this.state.mentor.length>0 ? <div>Mentor is not assigned yet</div>: <div class="card w-75 m-2">
                    <div class="card-body">
                      <h5 class="card-title">{this.state.mentor.name}</h5>
                      <p class="card-text">{this.state.mentor.gmail}</p>
                    </div>
                  </div> }
                    
                
            </div>
        )
    }
}

export default ShowMentorOfStudent
