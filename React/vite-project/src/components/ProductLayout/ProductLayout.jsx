import { v4 as uuidv4 } from 'uuid';

let ProductData = [
  {
    product_id:"1",
    image: "https://example.com/images/product1.jpg",
    title: "Smartwatch Alpha X1 - 40mm GPS",
    price: "$249",
    offer: "15",
    rating: "4.5",
    total_no_users: "1023"
  },
  {
    product_id:"2",
    image: "https://example.com/images/product2.jpg",
    title: "Smartwatch Beta Pro - 40mm GPS",
    price: "$299",
    offer: "10",
    rating: "4.2",
    total_no_users: "845"
  },
  {
    product_id:"3",
    image: "https://example.com/images/product3.jpg",
    title: "Smartwatch Gamma Series 3 - 40mm",
    price: "$199",
    offer: "25",
    rating: "4.6",
    total_no_users: "1347"
  },
  {
    product_id:"4",
    image: "https://example.com/images/product4.jpg",
    title: "Smartwatch Delta Sport Edition",
    price: "$329",
    offer: "30",
    rating: "4.8",
    total_no_users: "2134"
  },
  {
    product_id:"5",
    image: "https://example.com/images/product5.jpg",
    title: "Smartwatch Omega Fit 40mm",
    price: "$179",
    offer: "20",
    rating: "4.3",
    total_no_users: "982"
  },
  {
    product_id:"6",
    image: "https://example.com/images/product6.jpg",
    title: "Smartwatch Zeta Max GPS 40mm",
    price: "$349",
    offer: "18",
    rating: "4.9",
    total_no_users: "3012"
  },
  { 
    product_id:"7",
    image: "https://example.com/images/product7.jpg",
    title: "Smartwatch Epsilon Lite",
    price: "$159",
    offer: "12",
    rating: "4.0",
    total_no_users: "674"
  },
  {
    product_id:"8",
    image: "https://example.com/images/product8.jpg",
    title: "Smartwatch Sigma Ultra Thin",
    price: "$279",
    offer: "22",
    rating: "4.4",
    total_no_users: "1204"
  },
  {
    product_id:"9",
    image: "https://example.com/images/product9.jpg",
    title: "Smartwatch Theta 2025 Edition",
    price: "$399",
    offer: "17",
    rating: "4.7",
    total_no_users: "1890"
  },
  {
    product_id:"10",
    image: "https://example.com/images/product10.jpg",
    title: "Smartwatch Kronos Steel Series",
    price: "$319",
    offer: "19",
    rating: "4.1",
    total_no_users: "748"
  }
];

const ProductCard = (props) => {
  console.log(props);
  return (
    <>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="h-56 w-full">
          <a href="#">
            <img
              className="mx-auto h-full dark:hidden"
              src={props.image}
              alt=""
            />
            <img
              className="mx-auto hidden h-full dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
              alt=""
            />
          </a>
        </div>
        <div className="pt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
              Up to {props.offer} off{" "}
            </span>
          </div>
          <a
            href="#"
            className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
          >
            {props.title}
          </a>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center">
              <svg
                className="h-4 w-4 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
              <svg
                className="h-4 w-4 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
              <svg
                className="h-4 w-4 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
              <svg
                className="h-4 w-4 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
              <svg
                className="h-4 w-4 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {props.rating}
            </p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {props.total_no_users}
            </p>
          </div>
          <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Fast Delivery
              </p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Best Price
              </p>
            </li>
          </ul>
          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
              {props.price}
            </p>
            <button
              type="button"
              className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg
                className="-ms-2 me-2 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const ProductLayout = () => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 px-5">
          {ProductData.map((items, index) => {
            return (
              <ProductCard
                key = {uuidv4()}
                image={items.image}
                title={items.title}
                price={items.price}
                offer={items.offer}
                rating={items.rating}
                total_no_users={items.total_no_users}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

//Paramaters
// function add(a, b) {
//   return a + b;
// }

//Arguments
// add(10, 5); //15
// add(10, 20); //30
// add(10, 40); //50

export default ProductLayout;
