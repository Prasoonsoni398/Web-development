import { useState } from "react";

function ContactUs() {

  const [userName,setUserName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault();

    console.log("UserName :",userName);
    console.log("Email :",email);
    console.log("Message :",message);
    
  }

  return (
   <>
    <div className="d-flex justify-content-center">
      <div className="bg-light border shadow rounded w-50 mt-5 p-5">
        <form onSubmit={handleSubmit} >

          <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>

                <input
                  type="text"
                  className="form-control shadow-none border-2"
                  placeholder="Enter Your Name"
                  value={userName}
                  onChange={(e)=>setUserName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email Address</label>

                <input
                  type="email"
                  className="form-control shadow-none border-2"
                  placeholder="Enter Your Email"
                   value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Message</label>

                <textarea
                  className="form-control shadow-none border-2"
                  rows="4"
                  placeholder="Enter Your Message"
                   value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                ></textarea>
              </div>

             <div className="d-flex justify-content-center mt-3">
               <button className="btn btn-primary px-4 py-2" type="submit">Send Message</button>
             </div>
        </form>

      </div>
    </div>
   </>
  );
}

export default ContactUs;
