import React from 'react'
import './Contact.css'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2439f302-31a7-4349-b85e-0d9239f827c7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    
    <div className='contact'>
        <div className="contact-col left">
            <form  onSubmit={onSubmit}>
        <p>FOR AN OBLIGATION FREE CONSULTATION OR GENERAL INQUIRES, PLEASE FILL OUT THE FORM BELOW.</p>

                <label >First Name</label>
                <input type="text"  name ='first-name' required/>
                <label >Last Name</label>
                <input type="text"  name ='last-name' required/>
                <label >Email</label>
                <input type="text"  name ='email' required/>
                <label >Contact Number</label>
                <input type='number'  name ='number' required/>
                <label >Wedding Date</label>
                <input type="date"  name ='date' />
                <label >Ceremony Venue</label>
                <input type="text"  name ='venue' />
                <label >Message</label>
                <textarea name="message" ></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now</button>
                
            </form>
            <span>{result}</span>
        </div>
        
        <div className="contact-col right">

            <h5>NEW YORK</h5>
            <h7>TEL: 929-394-FREE</h7>
            <h7>ADD: 460 NOT-REAL St, Suite 1101, New York, NY 10018</h7>
        </div>
    </div>
  )
}

export default Contact