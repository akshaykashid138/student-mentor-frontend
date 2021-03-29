import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export class Student extends Component {
    constructor(props){
        super(props)

        this.state={
            students:[]
        }
    }
    

    componentDidMount(){
        this.getStudents()
      }

    getStudents=async ()=>{
        const {data}=await axios.get("http://localhost:4000/api/students")
        if(data){
            console.log(data)
            this.setState({students:data})
            console.log(this.state.students)
        }
    }
    render() {
        return (
            <div className="container">
                <button className="btn  btn-primary float-right mr-5 mb-2"><Link to='/createStudent' style={{color:'black'}}>Add Students</Link></button>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Student Name</th>
                        <th scope="col">Student Email</th>
                        <th scope="col"> Mentor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((student,index)=>(
                             <tr key={index}>
                           

                             <th scope="row">{index}</th>
                             <td>{student.name}</td>
                             <td>{student.email}</td>
                             
                             <td><a className="btn btn-warning m-2" href={`/showMentorOfStudent/${student._id}`}>
                                <i className="fas fa-edit"></i>&nbsp; Show Mentor
                                </a></td>
                             </tr>
                        ))
                        }
                       
                    
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Student



