import React, { useState } from 'react'
import { Form, Button,Image } from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../Assets/Login_Signup-01.svg';
import '../Css/Login_Signup.css';
import Axios from 'axios';
import fire from '../fire.js';
import Navigation from './Navigation';
const url = 'http://localhost:8080/api/signup';

function Signup() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [password, setPassword] = useState("");
	const [cpassword, setCPassword] = useState("");
	const history = useHistory();
	function validateForm() {
		//return name.length > 3 && (email.includes('@') && email.length > 8) && password.length >= 1 && password === cpassword
	}
	function handleSubmit(event) {
		event.preventDefault();
		fire.auth().createUserWithEmailAndPassword(email, password)
			.then(() => {
				console.log('user created succesfully')				
				Axios.post(url, {
					name: name,
					email: email,
					number: number
				})
				history.push('/home')
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log(errorCode)
				console.log(errorMessage)
			});
		}

	return (
		<>
		<Navigation />
		<div className="signup_up">
		<div className="container signup">
			<div className="row justify-content-center border-class form-back border shadow">
				<div className='col-md-6 col-sm-12 d-none d-md-block pl-0'>
				<Image  className="border-right border-black img1"src={img}  />
				</div>
				<div className="col-md-5 col-sm-12 ">
					<h3 className="text-center" >SignUp</h3>
					<Form onSubmit={handleSubmit} >
						<Form.Group controlId="formName">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" placeholder="Enter Name"
								value={name} onChange={(e) => setName(e.target.value)} />
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email"
								value={email} onChange={(e) => setEmail(e.target.value)} />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
		  					</Form.Text>
						</Form.Group>
						<Form.Group controlId="formBasicNumber">
							<Form.Label>Phone Number</Form.Label>
							<Form.Control type="telnum" placeholder="Enter Number"
								value={number} onChange={(e) => setNumber(e.target.value)} />
							<Form.Text className="text-muted">
								We'll never share your phone number with anyone else.
		  					</Form.Text>
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password"
								value={password} onChange={(e) => setPassword(e.target.value)} />
						</Form.Group>
						<Form.Group controlId="formBasicCPassword">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control type="password" placeholder="Password"
								value={cpassword} onChange={(e) => setCPassword(e.target.value)} />
						</Form.Group>
						<div className="d-flex justify-content-center" >
						<Button controlId="formButton" variant="primary" className="mb-3" type="submit" enabled={!validateForm()}>
							Submit
						</Button>
						</div>
						<h6 className="text-center">Already a User ! Login <NavLink to='/login'>here</NavLink></h6>
					</Form>
				</div>
			</div>
		</div>
		</div>
		</>
	)
}


export default Signup;
