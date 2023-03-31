import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";


const UpdateProfile = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({});

  const token = localStorage.getItem("token");

  useEffect(() => {
    getUser()
  }, [])

  //Fetch user data to display 
  const getUser = async () => {

    const userInfo = await fetch("http://localhost:5000/auth/getuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      }
    });
    const Info = await userInfo.json()

    setData(Info)
  }

  //User Updates The data
  const handleSubmit = async (e) => {
    e.preventDefault()
    //console.log(e.target.lookingForJob)
    const { userName, email, phoneNo, gender, qualification, cgpa, prevWork, dob, organisation, lookingForJob, description } = e.target
    
    
    const response = await fetch("http://localhost:5000/auth/updateuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      },
      body: JSON.stringify({
        userName: userName.value,
        email: email.value,
        phoneNo: phoneNo.value,
        description: description.value,        
        gender: gender.value,
        cgpa: cgpa.value,
        prevWork: prevWork.value,
        dob: dob.value,
        organisation: organisation.value,
        lookingForJob: lookingForJob.value,
        qualification: qualification.value
      })
    });
    const json = await response.json();
    window.location.reload(false);
    

  }

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }


  return (
    <div>
      <Navbar />
      <div style={{ "backgroundColor": "#e8e8e8" }}>
        <img src="" style={{ "width": "100%", "height": "160%", "position": "absolute", "marginLeft": "-50%" }}></img>

        <div className=" text-center container" style={{ "position": "relative", "opacity": "90%" }} >
          <div className="row ">
            <div className="col-12 left-form ">

              <form onSubmit={handleSubmit} className="form-profile" >

                <img className="mb-3 rounded-circle" src="https://i.pinimg.com/originals/b9/6d/76/b96d764d91fc70d9ee2643ae8bce1ffa.jpg" alt="" width="120" height="120" />

                <h4 className="h4 mb-12 font-weight-normal">My Profile</h4>

                <input type="text" name="userName" className="form-control bottom" placeholder=" UserName"
                value={data.userName} onChange={onChange} />

                <input type="email" name="email" className="form-control bottom" placeholder=" Email" 
                value={data.email} onChange={onChange} />

                <input type="tel" name="phoneNo" className="form-control bottom" placeholder=" Phone Number"
                value={data.phoneNo} onChange={onChange} />

                <input type="text" name="gender" className="form-control bottom" placeholder=" Gender"
                value={data.gender} onChange={onChange}  />

                <input type="text" name="description" className="form-control bottom" placeholder=" Describe Yourself"
                value={data.description} onChange={onChange}  />

                <input type="text" name="qualification" className="form-control bottom" placeholder=" Educational Qualification"
                value={data.qualification} onChange={onChange}  />

                <input type="text" name="cgpa" className="form-control bottom" placeholder="CGPA" 
                value={data.cgpa} onChange={onChange} />

                <input type="text" name="prevWork" className="form-control bottom" placeholder="Previously worked at ?" 
                value={data.prevWork} onChange={onChange} />

                <input className="form-control bottom" type="date" id="birthday" name="dob" 
                value={data.dob} onChange={onChange} />

                <div className="form-control " style={{ "textAlign": "left" }}>

                  <label className="float-left  "> College :</label>
                  <select name="organisation" className="mx-2"
                  value={data.college} onChange={onChange} >
                    <option value="KMIT">KMIT
                    </option>
                    <option value="NGIT">NGIT
                    </option>

                    <option value="KMEC"> KMEC
                    </option>

                  </select>
                </div>


                <div className="form-control bottom" style={{ "textAlign": "left" }}>
                  <label >Looking for Job Opportunities?</label>

                  <div className="form-check" style={{ "width": "20%" }}>

                    <input
                      className="form-check-input "
                      type="radio"
                      name="lookingForJob"
                      id="flexRadioDefault1"
                      value="Yes"
                      onChange={onChange} 
                    />
                    <label className="form-check-label" for="flexRadioDefault1">Yes</label>
                  </div>

                  <div className="form-check" style={{ "width": "20%" }}>
                    <input
                      className="form-check-input "
                      type="radio"
                      name="lookingForJob"
                      id="flexRadioDefault2"
                      value="No"
                      onChange={onChange} 
                    />
                    <label className="form-check-label" for="flexRadioDefault2">No</label>
                  </div>

                </div>

                <div className="form-control " style={{ "textAlign": "left" }} >
                  <label className="float-left "> Upload Photo: </label>
                  <br></br>
                  <input type="file" name="resume" />
                </div>
                <div className="form-control " style={{ "textAlign": "left" }} >
                  <label className="float-left "> Upload Resume:</label>
                  <br></br>
                  <input type="file" name="resume" />
                </div>


                <button className="btn mt-2  btn-md px-5 btn-primary btn-block" type="submit">Update</button>

              </form>
            </div>
          </div>
        </div>

      </div >


    </div >
  );
};

export default UpdateProfile;
