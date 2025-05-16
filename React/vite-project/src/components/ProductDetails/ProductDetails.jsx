import React from "react";
import { useParams } from "react-router-dom";
import { useState} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import useFetchProductsDetails from "../../Hooks/useFetchProductsDetails";


const ProductDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const {product, loading} = useFetchProductsDetails(id)


  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center py-8">Product not found</div>;
  }


  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Product Header */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Product Images */}
          <div className="mb-8 lg:mb-0">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              {/* <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-96 object-cover rounded-lg"
              /> */}
            </div>
            <LazyLoadImage
              className="w-full h-96 object-cover rounded-lg"
              alt={product.title}
              effect="blur"
              wrapperProps={{
                // If you need to, you can tweak the effect transition using the wrapper style.
                style: { transitionDelay: "0.2s" },
              }}
              src={product.thumbnail}
            />
            <div className="mt-4 grid grid-cols-4 gap-2">
              {product.images &&
                product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="h-24 w-full object-cover rounded cursor-pointer"
                  />
                ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pl-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {product.title}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Brand: <span className="font-semibold">{product.brand}</span> |
                Category:{" "}
                <span className="font-semibold">{product.category}</span>
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                {product.discountPercentage > 0 && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                    {product.discountPercentage}% OFF
                  </span>
                )}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${
                        index < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {product.rating} rating
                </span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-4">
                <div
                  className={`px-4 py-2 rounded-lg ${
                    product.stock > 10
                      ? "bg-green-100 text-green-800"
                      : product.stock > 0
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.stock > 10
                    ? "In Stock"
                    : product.stock > 0
                    ? "Low Stock"
                    : "Out of Stock"}
                </div>
                <span className="text-sm text-gray-500">
                  {product.stock} units left
                </span>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex gap-4">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`py-2 px-1 ${
                    activeTab === "description"
                      ? "border-b-2 border-primary-600 text-primary-600"
                      : "text-gray-500"
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("specifications")}
                  className={`py-2 px-1 ${
                    activeTab === "specifications"
                      ? "border-b-2 border-primary-600 text-primary-600"
                      : "text-gray-500"
                  }`}
                >
                  Specifications
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`py-2 px-1 ${
                    activeTab === "reviews"
                      ? "border-b-2 border-primary-600 text-primary-600"
                      : "text-gray-500"
                  }`}
                >
                  Reviews
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === "description" && (
                <div className="prose dark:prose-invert">
                  <p className="text-gray-600 dark:text-gray-300">
                    {product.description}
                  </p>
                </div>
              )}

              {activeTab === "specifications" && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <p className="text-sm">
                      <span className="font-medium text-gray-900 dark:text-white">
                        SKU:
                      </span>{" "}
                      <span className="text-gray-500 dark:text-gray-400">
                        {product.sku}
                      </span>
                    </p>
                    <p className="text-sm">
                      <span className="font-medium text-gray-900 dark:text-white">
                        Weight:
                      </span>{" "}
                      <span className="text-gray-500 dark:text-gray-400">
                        {product.weight}g
                      </span>
                    </p>
                    <p className="text-sm">
                      <span className="font-medium text-gray-900 dark:text-white">
                        Dimensions:
                      </span>{" "}
                      <span className="text-gray-500 dark:text-gray-400">
                        {product.dimensions.width} × {product.dimensions.height}{" "}
                        × {product.dimensions.depth} cm
                      </span>
                    </p>
                    <p className="text-sm">
                      <span className="font-medium text-gray-900 dark:text-white">
                        Warranty:
                      </span>{" "}
                      <span className="text-gray-500 dark:text-gray-400">
                        {product.warrantyInformation}
                      </span>
                    </p>
                    <p className="text-sm">
                      <span className="font-medium text-gray-900 dark:text-white">
                        Shipping:
                      </span>{" "}
                      <span className="text-gray-500 dark:text-gray-400">
                        {product.shippingInformation}
                      </span>
                    </p>
                    <p className="text-sm">
                      <span className="font-medium text-gray-900 dark:text-white">
                        Return Policy:
                      </span>{" "}
                      <span className="text-gray-500 dark:text-gray-400">
                        {product.returnPolicy}
                      </span>
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-4">
                  {product.reviews &&
                    product.reviews.map((review, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-200 pb-4 last:border-0"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {review.reviewerName}
                          </span>
                          <span className="text-sm text-gray-500">
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Add to Cart Button */}
            <div className="mt-8">
              <button
                type="button"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
