import Navbar from "./Navbar";

import React, { useState, useEffect } from "react";
import axios from "axios";



const UpdateProfile = () => {

  const token = localStorage.getItem("token");

  const [data, setData] = useState({});
  const [imageData, setImageData] = useState({
    file: []
  })
  const [resumeData, setResumeData] = useState({
    file: []
  })


  //Upload Image
  const imageUpload = async (e) => {
    e.preventDefault(true)
    let formdata = new FormData()
    formdata.append('profileImage', imageData.file)


    await axios.post("http://localhost:8080/upload/profileImg", formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
        "auth-token": token
      }
    })

    window.location.reload(false);

  }
  //Upload Resume
  const resumeUpload = async (e) => {
    e.preventDefault(true)
    let formdata = new FormData()
    formdata.append('resume', resumeData.file)

    await axios.post("http://localhost:8080/upload/resume", formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
        "auth-token": token
      }
    })

    window.location.reload(false);

  }


  //User Updates The data
  const handleSubmit = async (e) => {
    e.preventDefault()

    const { userName, email, phoneNo, gender, qualification, cgpa, prevWork, dob, organisation, lookingForJob, description } = e.target

    await fetch("http://localhost:8080/auth/updateuser", {
      method: 'POST',
      headers: {
        //'Content-Type': 'multipart/form-data',
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

    window.location.reload(false);
  }

  const onProfileChange = (e) => {
    setImageData({ ...imageData, file: e.target.files[0] })
  }
  const onResumeChange = (e) => {
    setResumeData({ ...resumeData, file: e.target.files[0] })
  }


  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  //Fetch user data to display 
  const getUser = async () => {

    const userInfo = await fetch("http://localhost:8080/auth/getuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      }
    });
    const Info = await userInfo.json()


    setData(Info)
  }
  
  useEffect(() => {
    getUser()
  }, [])



    return (
      <div>
        <Navbar />
        <div style={{ "backgroundColor": "#e8e8e8" }}>
          

          <div className=" text-center container" style={{ "position": "relative", "opacity": "90%" }} >
            <div className="row ">
              <div className="col-12 left-form ">

                <form onSubmit={handleSubmit} className="form-profile"
                  encType="multipart/form-data">

                  <img className="mb-3 rounded-circle" src={`http://localhost:8080/${data.profileImage}`} alt="ProfileImage" width="120" height="120" />

                  <h4 className="h4 mb-12 font-weight-normal">{data.userName}'s Profile</h4>

                  <input type="text" name="userName" className="form-control bottom" placeholder=" UserName"
                    value={data.userName} onChange={onChange} />

                  <input type="email" name="email" className="form-control bottom" placeholder=" Email"
                    value={data.email} onChange={onChange} />

                  <input type="tel" name="phoneNo" className="form-control bottom" placeholder=" Phone Number"
                    value={data.phoneNo} onChange={onChange} />

                  <input type="text" name="gender" className="form-control bottom" placeholder=" Gender"
                    value={data.gender} onChange={onChange} />

                  <input type="text" name="description" className="form-control bottom" placeholder=" Describe Yourself"
                    value={data.description} onChange={onChange} />

                  <input type="text" name="qualification" className="form-control bottom" placeholder=" Educational Qualification"
                    value={data.qualification} onChange={onChange} />

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
                      <label className="form-check-label" htmlFor="flexRadioDefault1">Yes</label>
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
                      <label className="form-check-label" htmlFor="flexRadioDefault2">No</label>
                    </div>
                  </div>
                  <button className="btn my-3 btn-md px-5 btn-success btn-block" type="submit">Update</button>


                  <div className="form-control " style={{ "textAlign": "left" }} >
                    <label className="float-left "> Upload Photo: </label>

                    <br></br>
                    <input type="file" name="profileImage" onChange={onProfileChange} />
                    <button className="btn   btn-sm px-5 btn-primary " type="submit" onClick={imageUpload}
                    >Upload</button>
                  </div>
                  <div className="form-control " style={{ "textAlign": "left" }} >
                    <label className="float-left "> Upload Resume:</label>
                    <br></br>
                    <input type="file" name="resume" onChange={onResumeChange} />
                    <button className="btn   btn-sm px-5 btn-primary "
                      type="submit" onClick={resumeUpload} >Upload</button>
                  </div>

                  

                </form>
              </div>
            </div>
          </div>

        </div >
      </div>

    );
  
};

export default UpdateProfile;
