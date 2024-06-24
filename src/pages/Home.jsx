import { useState } from 'react';
import { products } from './products';

const HomePage = ({ selectedCategory }) => {
  console.log(products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={product.imageurl}
                alt={product.name}
                className="w-full h-60 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-bold text-black">{product.name}</h2>
              <p className="text-gray-800">
                <span className="line-through">${product.originalPrice}</span>{' '}
                <span className="font-semibold">${product.currentPrice}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-4 bg-black text-white px-4 py-2 rounded disabled:opacity-50"
          >
            PREV
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentProducts.length < productsPerPage}
            className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
          >
            NEXT
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
