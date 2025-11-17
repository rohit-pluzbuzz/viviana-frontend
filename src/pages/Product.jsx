// src/pages/Product.jsx
import { useProducts } from '../ProductContext';
import ProductModal from '../components/ProductModel';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const PRODUCTS_PER_PAGE = 9;

function Product() {
  const API_BASE = (import.meta.env.VITE_API_URL && import.meta.env.VITE_API_URL.trim()) || "";
  const { products, loading } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { category } = useParams();

  if (loading) return <p className="p-4">Loading products...</p>;

  const filteredProducts = products
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(product =>
      category ? product.catlog.toLowerCase() === category.toLowerCase() : true
    );

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIdx = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIdx, startIdx + PRODUCTS_PER_PAGE);

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) setCurrentPage(pageNum);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#ffbd59] text-center p-12">
        <div className="z-10 relative pb-20">
          <h1 className="text-4xl font-roxborough md:text-5xl text-[#4a0343]">Products</h1>
          <div className="mt-4 flex justify-center">
            <img
              src="assets/bg_elements/line3.png"
              alt="underline graphic"
              className="h-10"
            />
          </div>
        </div>

        {/* Curved SVG Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[40px]"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill" fill="#f5f9ec"
            />
          </svg>
        </div>
      </section>
    <div className="devkish bg-[#F5F9EC] pb-20">
    <div className="px-5 md:px-24 py-10 flex justify-center items-center w-full">
        <input
          type="text"
          placeholder="Search products by name..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // will reset to page 1 on search
          }}
          className="w-full lg:w-1/2 p-2 border  focus:outline-[#F9A91F] focus:ring rounded-xl text-black"
        />
      </div>

      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:10 lg:px-24 py-10">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <div
              key={product.id}
              className="block w-full  relative hover:translate-y-1.5 bg-[linear-gradient(145deg, #ffffff, #f3f3f3)] border border-[#000000] rounded-xl transition ease-in-out overflow-hidden"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={
                  product.images?.length > 0
                    ? `${API_BASE}${product.images[0]}`
                    : 'https://via.placeholder.com/300x300?text=No+Image'
                }
                alt={product.name}
                className="w-full h-auto md:h-96 object-cover scale-105 hover:scale-110 transition-all ease-in"
              />

              <h2 className=" text-center text-sm md:text-lg absolute bottom-0 left-0 right-0 bg-white text-black p-1 md:p-4 m-2">{product.name}</h2>
            
            </div>


          ))
        ) : (
          <p className="col-span-4 text-center w-full text-gray-500 flex justify-center items-center "><h1>No products found.</h1></p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-6" id='pagination'>
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            ←
          </button>

          {[...Array(totalPages)].map((_, i) => (
  <button
    key={i + 1}
    onClick={() => goToPage(i + 1)}
    className={`px-3 py-1 rounded transition ${
      currentPage === i + 1
        ? 'active'
        : 'hover:bg-gray-200'
    }`}
  >
    {i + 1}
  </button>
))}


          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            →
          </button>
        </div>
      )}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
    </>
  );
}

export default Product;
