import React,{Component} from 'react'
import axios from 'axios'

class CreateMentor extends Component {
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
        e.preventDefault();
        
        const {name,email}=this.state;
        const data={
            name:name,
            email:email,
        }
        let result=await axios.post("https://student-mentor-mern-app.herokuapp.com/api/mentors/createMentor",data)
        if(result.data){
            this.setState({message:result.data.message})
            this.setState({title:"", description:"", postCategory:""})
            this.props.history.push('/mentors')
        }
        
    }

    render(){
        return (
            <div>
                <div className="container">
                    {this.state.message != "" ? <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong> {this.state.message} </strong> 
                </div> : <div> </div> }
                
                     <form>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" className="form-control" id="name" name="name" placeholder="Enter Name"
                  value={this.state.name} onChange={this.handleInputChange} />
                  
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
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

export default CreateMentor
