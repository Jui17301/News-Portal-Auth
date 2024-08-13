
import React, { useContext } from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

const {createUser} = useContext(AuthContext);

  const handleRegister = e =>{
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    // console.log(name,photo,email,password);

    //create user
    createUser(email,password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.error(error)
    })
  }
  return (
    <div>
        <div>
      <Navbar></Navbar>
<div>
<h2 className="text-3xl my-10 text-center">Register your account</h2>
      <form className="card-body md:w-3/4 lg:w-1/2 mx-auto" onSubmit={handleRegister}>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" >Register</button>
        </div>
      </form>
      <p className='text-center mb-5'>Already have an account? <Link className='text-blue-600 font-bold' to='/login'>Login</Link></p>
</div>

    </div>
    </div>
  )
}

export default Register
