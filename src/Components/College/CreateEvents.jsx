import React from 'react';
import Navbar from './Navbar';



const CreateEvents = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const { title,url,description} = e.target
    
    
    const response = await fetch("http://localhost:8080/api/newEvent", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({       
        description: description.value,
        title: title.value, 
        url: url.value
 
      })
    });


    window.location.reload(false);


  }
  return (
    <div>
      <Navbar />
      <div className="container my-3" style={{ "textAlign": "left" }}>
        <h2>Create New Events!</h2>
        <form className="my-3" onSubmit={handleSubmit} method="POST">

          <div className="mb-3">
            <label htmlFor="title" className="form-label">Event Name</label>
            <input type="text" className="form-control" id="title" name="title" required />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="salary" name="description" />
          </div>


          <div className="mb-3">
            <label htmlFor="Url" className="form-label">Url</label>
            <input type="text" className="form-control" id="contact" name="url" required />
          </div>


          <button type="submit" className="btn btn-primary">Add Event</button>
        </form>
      </div>
    </div>)
      

  
}
export default CreateEvents;