function Home() {
  return (
    <>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">
            Welcome to Prasoon's Website
          </h1>
          <p className="lead">
            Learn React, Bootstrap, and Web Development easily.
          </p>
          <button className="btn btn-primary btn-lg">Get Started</button>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h4>React</h4>
                <p>Build interactive user interfaces.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h4>Bootstrap</h4>
                <p>Create responsive and attractive designs quickly.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h4>Projects</h4>
                <p>Practice concepts by building projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
