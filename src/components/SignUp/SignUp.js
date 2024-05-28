import { useState } from 'react'
import { registerAdmin } from '../../api/api'
import React from 'react'
import SignupStyle from './Signup.module.css'
// import { useNavigate } from 'react-router-dom'

function SignUp() {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  // const notify = () => {
  //   toast.success("signed Up successfully !", {
  //     position: "top-center"
  //   });
  // }


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };


  const handleSubmit = async () => {
    let flag = true;

    if (formData.name.trim() === "") {
      setFormData(prevState => ({ ...prevState, name: "Invalid Name" }));
      flag = false;
    }
    if (formData.email.trim() === "") {
      setFormData(prevState => ({ ...prevState, email: "Invalid Email" }));
      flag = false;
    }
    if (formData.password.trim() === "") {
      setFormData(prevState => ({ ...prevState, password: "weak Password" }));
      flag = false;
    }
    if (formData.confirmPassword.trim() === "") {
      setFormData(prevState => ({ ...prevState, confirmPassword: "Password doesn't match" }));
      flag = false;
    }
    console.log(formData);
    if (formData.password !== formData.confirmPassword) {
      return;
    }

    if (!flag) {
      return;
    }
    const result = await registerAdmin(formData);
    if (result) {
      console.log(result);
      // notify();
    //   setTimeout(() => {
    //     navigate('/login');
    //   }, 1500);
    }
  };



  return (
    <div className={SignupStyle.app}>
      <div className={SignupStyle.parent}>
        <div className={SignupStyle.main}>
          <h1 className={SignupStyle.heading}>QUIZZIE</h1>
          <div className={SignupStyle.container}>
            <div className={SignupStyle.signup}>Sign Up</div>

          </div>
          <div className={SignupStyle.form}>
            <div className={SignupStyle.field}>
              <label className={SignupStyle.label}>Name</label>
              <input
                style={{ color: formData.name === "Invalid Name" ? "red" : null }}
                className={SignupStyle.input}
                name="name"
                value={formData.name}
                onChange={handleChange}
                type={"text"}
              ></input>
            </div>

            <div className={SignupStyle.field}>
              <label className={SignupStyle.label}>Email</label>
              <input
                style={{ color: formData.email === "Invalid Email" ? "red" : null }}
                className={SignupStyle.input}
                name="email"
                value={formData.email}
                onChange={handleChange}
                type={"email"}
              ></input>
            </div>

            <div className={SignupStyle.field}>
              <label className={SignupStyle.label}>Password</label>
              <input
                style={{ color: formData.password === "weak Password" ? "red" : null }}
                className={SignupStyle.input}
                name="password"
                value={formData.password}
                onChange={handleChange}
                type={"text"}
              ></input>
            </div>

            <div className={SignupStyle.field}>
              <label className={SignupStyle.label}>Confirm Password</label>
              <input
                style={{ color: formData.confirmPassword === "Password doesn't match" ? "red" : null }}
                className={SignupStyle.input}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                type={"text"}
              ></input>
            </div>

            <button onClick={handleSubmit} className={SignupStyle.button}>
              SignUp
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default SignUp