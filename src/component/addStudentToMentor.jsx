import React,{Component} from 'react'
import axios from 'axios'

class AddStudentToMentor extends Component {
    constructor(props){
        super(props)

        this.state={
            name:"",
            email:"",
            message:""
        }
    }
    

    handleInputChange=(e)=>{
        const {name,value}=e.target
        this.setState({
            ...this.state,
            [name]:value
        })   
    }

    
    onSubmit=async (e)=>{
        e.preventDefault()

        const {name, email}=this.state
        const data={
            name,
            email
        }
        const id=this.props.match.params.id
        console.log(id)
        let result=await axios.put(`https://student-mentor-mern-app.herokuapp.com/api/mentors/${id}/addStudents`,data)
        if(result.data){
            this.setState({message:result.data.message})
            this.setState({title:"", description:"", postCategory:""})
        }
    }

    render(){
        return (
            <div className='container'>
                <h2>Add Student To Mentor</h2>
                <p>Add student which is present in database.</p>
                <p>Add Student which is already created</p>
                {this.state.message != "" ? <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong> {this.state.message} </strong> 
                </div> : <div> </div> }
                <div className="container">
                     <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" name="name" placeholder="Enter Name"
                  value={this.state.name} onChange={this.handleInputChange} />
                  
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="text" className="form-control" id="postCategory" name="email" placeholder="email"
                   value={this.state.email} onChange={this.handleInputChange}/>
                </div>
               
                <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
              </form>
                </div>
            </div>
        )
    }
    
}

export default AddStudentToMentor   
