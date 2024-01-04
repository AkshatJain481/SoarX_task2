import React from "react";


function Registration(){
    
    function Submit(e){
        const formEle = document.querySelector("form")
        e.preventDefault();
        const formData = new FormData(formEle) 
        fetch("https://script.google.com/macros/s/AKfycbxOTXRagCUBNP31T5aDbHTpvwuslVPOWhSaQNjy-xdU_imOMsbenF7uiInSmMWNsJ7o5A/exec",{
            method: 'POST',
            body: formData
        })
        .then(window.location.reload())
        .then(alert("Details have been submitted!"))
            
    }
    return(
        <>
        <div className="parent-cont">
    <div class="container">
    <h2 className="reg-head">Registration Form</h2>
    <form onSubmit={(e)=>{Submit(e)}}>
      <label for="name">Name:</label>
      <input type="text" id="name" name="Name" required/>

      <label for="email">Email:</label>
      <input type="email" id="email" name="Email" required/>

      <label for="contact">Contact No:</label>
      <input type="tel" id="contact" name="Contact" required/>

      <label for="college">College:</label>
      <input type="text" id="college" name="College" required/>

      <label for="branch">Branch:</label>
      <input type="text" id="branch" name="Branch" required/>

      <label for="year">Year:</label>
      <input type="number" id="year" name="Year" required/>

      <button type="submit" className="reg-button custom">Submit</button>
    </form>
  </div>
  </div>
        </>
    );
}

export default Registration;