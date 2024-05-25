import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Login.css'



function Login() {

  
  const [formData, setFormData] = useState({ 
      email: "",
      password: "",
  });

  const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
      let flag = true;

      if (formData.email.trim() === "") {
        setFormData(prevState => ({ ...prevState, email: "Invalid Email" }));
        flag = false;
      }
      if (formData.password.trim() === "") {
        setFormData(prevState => ({ ...prevState, password: "wrong Password" }));
        flag = false;
      }
      if(!flag){
        return;
      }

  };
    
  return (
    <div className={styles.app}>
      <div className = {styles.parent}>
        <div className={styles.main}>
          <h1 className={styles.heading}>QUIZZIE</h1>
          <div className={styles.container}>
            
            <div className={styles.login}>Log In</div>
          </div>
          <div className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label}>Email</label>
              <input
                  className={styles.input}
                  name="email"
                  style={{ color: formData.email === "Invalid Email" ? "red" : null }}
                  value={formData.email}
                  onChange={handleChange}
                  type={"email"}
              ></input>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Password</label>
              <input
                  className={styles.input}
                  name="password"
                  style={{ color: formData.password === "wrong Password" ? "red" : null }}
                  value={formData.password}
                  onChange={handleChange}
                  type={"text"}
              ></input>
            </div>

            <button onClick={handleSubmit} className={styles.button}>
                Login
            </button>

          </div>
        </div>
    
      </div>
    </div>
  )
}

export default Login