function ContactUs() {
  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center text-primary mb-4">Contact Us</h2>

              <div className="mb-3">
                <label className="form-label">Full Name</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>

                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>

              <button className="btn btn-primary w-100">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
