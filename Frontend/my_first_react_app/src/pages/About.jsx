const About = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">About Us</h1>
        <p className="text-muted">
          Your trusted destination for quality products at affordable prices.
        </p>
      </div>

      <div className="row align-items-center">
        <div className="col-lg-6 p-3">
          <img
            src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=1000&q=80"
            alt="Our Team"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-lg-6 px-lg-5">
          <h2 className="text-primary fw-bold">Who We Are</h2>
          <p>
            We are passionate about providing customers with high-quality
            products and a seamless shopping experience.
          </p>

          <p>
            From electronics to fashion, our goal is to offer a wide range of
            products at competitive prices while ensuring customer satisfaction.
          </p>

          <h2 className="text-primary fw-bold mt-5">Why Choose Us?</h2>
          <ul>
            <li>Quality Products</li>
            <li>Fast Delivery</li>
            <li>Secure Payments</li>
            <li>24/7 Customer Support</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-5">
        <h2 className="text-primary fw-bold">Our Mission</h2>
        <p className="text-muted">
          To make online shopping easy, reliable, and accessible for everyone.
        </p>
      </div>
    </div>
  );
};

export default About;
