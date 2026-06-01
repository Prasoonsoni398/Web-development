function Product() {
  return (
    <div className="container py-5">
      <h1 className="text-center text-primary fw-bold mb-2">Our Products</h1>

      <p className="text-center text-muted mb-5">
        Explore our latest collection of gadgets
      </p>

      <div className="row g-4">
        {/* Product 1 */}
        <div className="col-md-4">
          <div className="card shadow-lg h-100">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              className="card-img-top"
              alt="Smart Watch"
              style={{ height: "250px", objectFit: "cover" }}
            />

            <div className="card-body text-center">
              <h4 className="card-title">Smart Watch</h4>

              <p className="card-text">
                Track your fitness, monitor health, and stay connected.
              </p>

              <h5 className="text-success fw-bold">₹2,999</h5>

              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="col-md-4">
          <div className="card shadow-lg h-100">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
              className="card-img-top"
              alt="Headphones"
              style={{ height: "250px", objectFit: "cover" }}
            />

            <div className="card-body text-center">
              <h4 className="card-title">Headphones</h4>

              <p className="card-text">
                Enjoy crystal-clear sound with dolby-atmos audio quality.
              </p>

              <h5 className="text-success fw-bold">₹1,499</h5>

              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="col-md-4">
          <div className="card shadow-lg h-100">
            <img
              src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46"
              className="card-img-top"
              alt="Wireless Mouse"
              style={{ height: "250px", objectFit: "cover" }}
            />

            <div className="card-body text-center">
              <h4 className="card-title">Wireless Mouse</h4>

              <p className="card-text">
                Smooth navigation with ergonomic and wireless design.
              </p>

              <h5 className="text-success fw-bold">₹1199</h5>

              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
