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
        selectedCategory === "All"
          ? true
          : product.category === selectedCategory,
      )
      .filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()),
      );
  }, [products, searchTerm, selectedCategory]);

  return (
    <main className="bg-(--bg-page) pb-14 transition-colors duration-300">
      <section className="bg-gradient-to-br from-(--accent)/10 via-(--bg-page) to-(--bg-page) py-10 sm:py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="rounded-[32px] bg-(--bg-panel)/80 backdrop-blur-sm p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)] border border-(--accent)/20">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-(--accent)">
                  shop products
                </p>
                <h1 className="mt-3 text-4xl font-bold text-(--text-primary)">
                  Find the perfect product for your next purchase.
                </h1>
                <p className="mt-4 max-w-2xl text-(--text-muted) leading-7">
                  Filter by category, search instantly, and explore featured
                  items with rich product previews.
                </p>
              </div>
              <div className="rounded-3xl bg-(--bg-panel-soft) p-4 shadow-sm">
                <p className="text-sm text-(--text-muted)">
                  Available products
                </p>
                <p className="mt-2 text-3xl font-semibold text-(--text-primary)">
                  {products.length}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1.3fr_0.8fr] lg:items-end">
              <div className="rounded-3xl border border-(--border) bg-(--bg-panel-soft) p-4">
                <label className="relative block text-(--text-muted)">
                  <span className="sr-only">Search products</span>
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products, categories, or keywords"
                    className="w-full rounded-3xl border border-(--border) bg-(--bg-panel) px-4 py-3 pr-12 text-(--text-primary) outline-none focus:border-(--accent) focus:ring-2 focus:ring-(--accent)/10"
                  />
                </label>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="rounded-full border border-(--border) bg-(--bg-panel) px-5 py-3 text-sm font-semibold text-(--text-primary) transition hover:bg-(--bg-panel-soft)"
                >
                  Reset Search
                </button>
                <div className="rounded-3xl bg-(--accent) px-5 py-3 text-sm font-semibold text-slate-950">
                  {selectedCategory === "All"
                    ? "Showing all categories"
                    : `Category: ${selectedCategory}`}
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
                      ? "bg-(--accent) text-slate-950 shadow-lg"
                      : "bg-(--bg-card) text-(--text-primary) hover:bg-(--bg-panel-soft)"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {isLoading ? (
        <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <div className="flex h-80 items-center justify-center rounded-[32px] bg-(--bg-panel) shadow-lg">
            <img src={loading} alt="Loading products" className="h-20 w-20" />
          </div>
        </section>
      ) : isError ? (
        <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <div className="rounded-[32px] bg-(--bg-panel) p-10 text-center shadow-lg">
            <h2 className="text-2xl font-semibold text-(--text-primary)">
              Unable to load products
            </h2>
            <p className="mt-4 text-(--text-muted)">
              Try a different search term or select another category.
            </p>
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-[32px] border border-(--border) bg-(--bg-panel) shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden bg-(--bg-panel-soft) px-6 py-8">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-(--accent)/10 blur-2xl" />
                    <img
                      src={product.image}
                      alt={product.title}
                      className="mx-auto h-48 w-48 object-contain transition duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-flex rounded-full bg-(--accent)/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-(--accent)">
                      {product.category}
                    </span>
                    <h3
                      className="mt-5 text-lg font-semibold text-(--text-primary) line-clamp-2"
                      title={product.title}
                    >
                      {product.title}
                    </h3>
                    <p className="mt-3 text-sm text-(--text-muted) line-clamp-3">
                      {product.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xl font-bold text-(--text-primary)">
                          ₹{Math.round(product.price * 100)}
                        </p>
                        <p className="text-sm text-(--text-muted)">
                          {product.rating?.count} reviews
                        </p>
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-(--bg-card) px-3 py-2 text-sm font-semibold text-(--text-primary)">
                        <FaStar className="text-yellow-400" />{" "}
                        {product.rating?.rate}
                      </div>
                    </div>
                    <button className="mt-6 w-full rounded-full bg-(--accent) px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-700">
                      Add to Cart
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <div className="rounded-[32px] bg-(--bg-panel) p-14 text-center shadow-lg">
                <h2 className="text-2xl font-semibold text-(--text-primary)">
                  No products found
                </h2>
                <p className="mt-4 text-(--text-muted)">
                  Try a different search term or select another category.
                </p>
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  );
};

export default Product;
