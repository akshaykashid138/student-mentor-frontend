import React, { Component } from 'react'
import axios from 'axios'
export class ShowStudentsOfMentor extends Component {
    constructor(props){
        super(props)

        this.state={
            students:[]
        }
    }

    componentDidMount(){
        let id=this.props.match.params.id
        console.log(id)
        axios.get(`https://student-mentor-mern-app.herokuapp.com/api/mentors/${id}/students`).then((res)=>{
        console.log(res)
          if(res.data){
             
               this.setState({
                students:res.data
               })
              console.log("state",this.state.students)
          }
      })
    }
    render() {
        return (
            <div className="container">
                {this.state.students.map((student,index)=>(
                    
                   
                    <div class="card w-75 m-2">
                    <div class="card-body">
                      <h5 class="card-title">{student.name}</h5>
                      <p class="card-text">{student.email}</p>
                    </div>
                  </div>
                ))}
            </div>
        )
    }
}

export default ShowStudentsOfMentor
