import {Form,Button} from 'react-bootstrap'
import { FaSignInAlt } from "react-icons/fa";
import loginimg from '../images/login.svg';


function FetchAPI() {
  
  //Get Method
  const apiGet = () => {
    fetch("http://localhost/index.php/user/list?user_name="user_name"")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
       
      });
  };

function Login() {
  return (
    <div className='container'>
      <p className="display-2 text-center text-primary">Login</p>

        <img
        src={loginimg}
        width="300px"
        className="d-sm-block d-none mx-auto"
         alt=""
        />
      <Form className='w-50 mx-auto'>

        <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="enter username "   />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="enter password "/>
        </Form.Group>

        <Button variant="primary" type="submit" onclick={apiGet}>
        <a href="http://localhost:3000/main">L</a>LogIn <FaSignInAlt/>
        </Button>
    </Form>
    </div>
  )
}

export default Login
