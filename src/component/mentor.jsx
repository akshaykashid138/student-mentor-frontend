import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export class Mentor extends Component {
    constructor(props){
        super(props)

        this.state={
            mentors:[]
        }
    }
    

    componentDidMount(){
        this.getMentors()
      }

    getMentors=async ()=>{
        const {data}=await axios.get("http://localhost:4000/api/mentors")
        if(data){
            console.log(data)
            this.setState({mentors:data})
            
        }
    }
    render() {
        return (
            <div className="container">
                <button className="btn  btn-primary float-right mr-5 mb-2"><Link to='/createMentor' style={{color:'black'}}>Add Mentor</Link></button>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mentor Name</th>
                        <th scope="col">Mentor Email</th>
                        <th scope="col">Add student</th>
                        <th scope="col">Student Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.mentors.map((mentor,index)=>(
                             <tr key={index}>
                           

                             <th scope="row">{index}</th>
                             <td>{mentor.name}</td>
                             <td>{mentor.email}</td>
                             <td><a className="btn btn-warning m-2" href={`/addStudentToMentor/${mentor._id}`}>
                                <i className="fas fa-edit"></i>&nbsp; Add Student
                                </a>
                            </td>
                             <td><a className="btn btn-warning m-2" href={`/showStudentsOfMentor/${mentor._id}`}>
                                <i className="fas fa-edit"></i>&nbsp; Show Students
                                </a>
                            </td>
                             </tr>
                        ))
                        }
                       
                    
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Mentor
