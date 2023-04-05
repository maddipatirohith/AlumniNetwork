
import React from "react";
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (e.target.cpassword.value !== e.target.password.value) {
      alert("Passwords does not match")

    }
    else {
      const { organisation, userName, email, password } = e.target
      const response = await fetch("http://localhost:8080/auth/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          organisation: organisation.value,
          userName: userName.value,
          email: email.value,
          password: password.value
        })

      });
      const json = await response.json();
      if (json.success) navigate('/signin');
      else alert("User already exists ")


    }

  }


  return (
    <div>

      <img src="https://jjmmc.org/alumni/wp-content/uploads/2021/08/alumni.jpg" style={{ "height": "100%", "width": "100%", "position": "absolute", "marginLeft": "-50%" }} ></img>

      <div className=" text-center container-fluid " >
        <div className="row ">
          <div className=" left-form " style={{ "position": "relative", "opacity": "90%" }} >

            <form onSubmit={handleSubmit} className="form-signup" >

              <img className="mb-3 " src="logo512.png" alt="" width="72" height="72" />
              <h4 className="h4 mb-12 font-weight-normal" >Build your Career</h4>

              <div className="form-control " style={{ "textAlign": "left" }}>

                <label className="float-left  "> You are From? :</label>
                <select name="organisation" className="mx-2"
                  >
                  <option value="Company"> Company
                  </option>
                  <option value="KMIT">KMIT
                  </option>
                  <option value="NGIT">NGIT
                  </option>

                  <option value="KMEC"> KMEC
                  </option>

                </select>
              </div>


              <input type="text" name="userName" className="form-control bottom" placeholder=" UserName" />

              <input type="email" name="email" className="form-control bottom" placeholder=" Email" />

              <input type="password" name="password" className="form-control bottom" placeholder=" Password" />

              <input type="password" name="cpassword" className="form-control bottom" placeholder=" Confirm Password" />


              <button className="btn mt-2 px-5 btn-lg btn-primary btn-block" type="submit">Sign Up</button>

              <p className="mt-2" style={{ "color": "white" }}>Already a user? <a href='signin'>Login</a></p>

            </form>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Register;
