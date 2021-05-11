import Student from './component/student'
import Mentor from './component/mentor'
import Navbar from './component/navbar'
import Home from './component/home'
import Footer from './component/footer'
import CreateStudent from './component/createStudent'
import CreateMentor from './component/createMentor'
import AddStudentToMentor from './component/addStudentToMentor'
import ShowStudentsOfMentor from './component/showStudentsOfMentor'
import ShowMentorOfStudent from './component/showMentorOfStudent'
import {BrowserRouter,Route} from 'react-router-dom' 
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Route path='/students' component={Student} /> 
      <Route path='/mentors' component={Mentor} /> 
      <Route path='/createStudent' component={CreateStudent} />
      <Route path='/createMentor' component={CreateMentor} />
      <Route path='/addStudentToMentor/:id' component={AddStudentToMentor} />
      <Route path='/showStudentsOfMentor/:id' component={ShowStudentsOfMentor} />
      <Route path='/showMentorOfStudent/:id' component={ShowMentorOfStudent} />
      <Route path='/' exact component={Home} /> 
      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
