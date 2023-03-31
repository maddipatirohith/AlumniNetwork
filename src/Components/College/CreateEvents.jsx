import React from 'react';
import Navbar from './Navbar';



const CreateEvents = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const { title,url,description} = e.target
    
    
    const response = await fetch("http://localhost:5000/api/newEvent", {
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
      <div class="container my-3" style={{ "textAlign": "left" }}>
        <h2>Create New Events!</h2>
        <form class="my-3" onSubmit={handleSubmit} method="POST">

          <div class="mb-3">
            <label htmlFor="title" class="form-label">Event Name</label>
            <input type="text" class="form-control" id="title" name="title" required />
          </div>

          <div class="mb-3">
            <label htmlFor="description" class="form-label">Description</label>
            <input type="text" class="form-control" id="salary" name="description" />
          </div>


          <div class="mb-3">
            <label htmlFor="Url" class="form-label">Url</label>
            <input type="text" class="form-control" id="contact" name="url" required />
          </div>

          {/* <div class="mb-3">
            <label htmlFor="Photo" class="form-label">Photo</label>
            <input type="file" class="form-control" id="contact" name="photo" required />
          </div>
 */}

          <button type="submit" class="btn btn-primary">Add Event</button>
        </form>
      </div>
    </div>)
      

  
}
export default CreateEvents;