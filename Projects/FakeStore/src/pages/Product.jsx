import React, { useEffect, useMemo, useState } from "react";
import { FaStar } from "react-icons/fa6";
import loading from "../assets/loading.gif";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const categories = useMemo(() => {
    const unique = products.map((product) => product.category);
    return ["All", ...Array.from(new Set(unique))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) =>
        selectedCategory === "All" ? true : product.category === selectedCategory
      )
      .filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [products, searchTerm, selectedCategory]);

  return (
    <main className="bg-slate-100 pb-14">
      <section className="mx-auto max-w-6xl px-6 pt-10 sm:px-10">
        <div className="rounded-[32px] bg-white p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-500">shop products</p>
              <h1 className="mt-3 text-4xl font-bold text-slate-900">Find the perfect product for your next purchase.</h1>
              <p className="mt-4 max-w-2xl text-slate-600 leading-7">
                Filter by category, search instantly, and explore featured items with rich product previews.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4 shadow-sm">
              <p className="text-sm text-slate-500">Available products</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900">{products.length}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.3fr_0.8fr] lg:items-end">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <label className="relative block text-slate-500">
                <span className="sr-only">Search products</span>
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search products, categories, or keywords"
                  className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 pr-12 text-slate-900 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </label>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Reset Search
              </button>
              <div className="rounded-3xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-white">
                {selectedCategory === "All" ? "Showing all categories" : `Category: ${selectedCategory}`}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  selectedCategory === category
                    ? "bg-slate-900 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {isLoading ? (
        <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <div className="flex h-80 items-center justify-center rounded-[32px] bg-white shadow-lg">
            <img src={loading} alt="Loading products" className="h-20 w-20" />
          </div>
        </section>
      ) : isError ? (
        <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <div className="rounded-[32px] bg-white p-10 text-center shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-900">Unable to load products</h2>
            <p className="mt-4 text-slate-600">{errorMessage || "Something went wrong while fetching product data."}</p>
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden bg-slate-50 px-6 py-8">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl" />
                    <img
                      src={product.image}
                      alt={product.title}
                      className="mx-auto h-48 w-48 object-contain transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">
                      {product.category}
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-slate-900 line-clamp-2" title={product.title}>
                      {product.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 line-clamp-3">
                      {product.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xl font-bold text-slate-900">₹{Math.round(product.price * 100)}</p>
                        <p className="text-sm text-slate-500">{product.rating?.count} reviews</p>
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
                        <FaStar className="text-yellow-400" /> {product.rating?.rate}
                      </div>
                    </div>
                    <button className="mt-6 w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                      Add to Cart
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <div className="rounded-[32px] bg-white p-14 text-center shadow-lg">
                <h2 className="text-2xl font-semibold text-slate-900">No products found</h2>
                <p className="mt-4 text-slate-600">Try a different search term or select another category.</p>
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  );
};

export default Product;
