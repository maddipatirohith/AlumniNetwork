import React from 'react';
import Navbar from './Navbar';



const CreateNotices = () => {


  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const { title,description} = e.target
    
    
    const response = await fetch("http://localhost:8080/api/newNotice", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({       
        description: description.value,
        title: title.value
 
      })
    });
    window.location.reload(false);


  }
  return (
    <div>
      <Navbar />

      <div className="container my-3" style={{ "textAlign": "left" }}>
        <h2>Create Notices!</h2>
        <form className="my-3" onSubmit={handleSubmit} method="POST">

          <div className="mb-3">   
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" required />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="salary" name="description" />
          </div>



          <button type="submit" className="btn btn-primary">Add Event</button>
        </form>
      </div>
    </div>)
      

  
}
export default CreateNotices;