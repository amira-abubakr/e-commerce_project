import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import img1 from "../assets/image/pro1.png";
import img2 from "../assets/image/pro2.png";
import img3 from "../assets/image/pro3.png";
import img4 from "../assets/image/pro4.png";
import img5 from "../assets/image/pro5.png";
import img6 from "../assets/image/pro6.png";
import img7 from "../assets/image/pro7.png";
import img8 from "../assets/image/pro8.png";
import img9 from "../assets/image/pro9.png";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

interface Product {
  image: string;
  category: string;
  name: string;
  price: string;
  rating: string;
}

const products: Product[] = [
  { image: img1, category: "Jacket", name: "Brown Leather Jacket", price: "IDR XXX", rating: "4.95" },
  { image: img2, category: "Shirt", name: "Black Yellow Square Shirt", price: "IDR XXX", rating: "4.95" },
  { image: img3, category: "Shirt", name: "White Men Formal Shirt", price: "IDR XXX", rating: "4.95" },
  { image: img4, category: "Hoodie & Sweater", name: "Unisex Orange Sweater", price: "IDR XXX", rating: "4.95" },
  { image: img5, category: "Hoodie & Sweater", name: "T-shirt Cotton 30S", price: "IDR XXX", rating: "4.95" },
  { image: img6, category: "Hoodie & Sweater", name: "White Oversize Cotton", price: "IDR XXX", rating: "4.95" },
  { image: img7, category: "Jacket", name: "White Men Formal Shirt", price: "IDR XXX", rating: "4.95" },
  { image: img8, category: "Hoodie & Sweater", name: "White Woman Formal Shirt", price: "IDR XXX", rating: "4.95" },
  { image: img9, category: "Hoodie & Sweater", name: "Formal Shirt Men", price: "IDR XXX", rating: "4.95" },
];

const ProductList = () => {
  const [openCategory, setOpenCategory] = useState(true);
  const [openWoman, setOpenWoman] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Section بعد الـ Navbar */}
      <div className="pt-24 px-6 md:px-24 py-12">
        {/* عنوان الصفحة */}
        <h2 className="text-4xl md:text-4xl font-light font-bold text-gray-800 mb-6 ">
          All Products
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full  md:w-[300px]  rounded-md bg-white shadow">
            <button
              onClick={() => setOpenCategory(!openCategory)}
              className="w-full py-4 flex justify-between items-center bg-[#E8E0DC] px-4 py-2 font-medium text-gray-700"
            >
              CATEGORY
              {openCategory ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </button>

            {openCategory && (
              <div className="p-2 space-y-2 text-sm">
                <button
                  onClick={() => setOpenWoman(!openWoman)}
                  className="w-full py-3 flex justify-between items-center text-gray-700 font-medium"
                >
                  Woman
                  {openWoman ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>

                {openWoman && (
                  <div className="pl-4 space-y-2 text-gray-600">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="accent-black" />
                      Dress <span className="text-xs text-gray-400 ml-auto">99+</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="accent-black" />
                      Shirt <span className="text-xs text-gray-400 ml-auto">37</span>
                    </label>
                  </div>
                )}

                <button className="w-full py-3 flex justify-between items-center text-gray-700 font-medium">
                  Man <ChevronRight size={16} />
                </button>
                <button className="w-full py-3 flex justify-between items-center text-gray-700 font-medium">
                  Unisex <ChevronRight size={16} />
                </button>
                <button className="w-full py-3 flex justify-between items-center text-gray-700 font-medium">
                  PRICE <ChevronRight size={16} />
                </button>
                <button className="w-full py-3 flex justify-between items-center text-gray-700 font-medium">
                  SIZE <ChevronRight size={16} />
                </button>
                <button className="w-full py-3 flex justify-between items-center text-gray-700 font-medium">
                  COLOR <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Products Grid */}
          <div className="flex-1 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="relative w-full overflow-hidden group rounded-lg shadow">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[350px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Rating */}
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-[#8B4513] text-white text-sm px-2 py-1 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568L24 9.423l-6 5.851 1.417 8.263L12 18.897 4.583 23.537 6 15.274 0 9.423l8.332-1.268z" />
                    </svg>
                    {product.rating}
                  </div>
                </div>
                {/* Info */}
                <div className="mt-3">
                  <p className="text-xs text-gray-500">{product.category}</p>
                  <p className="text-lg font-medium">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductList;
