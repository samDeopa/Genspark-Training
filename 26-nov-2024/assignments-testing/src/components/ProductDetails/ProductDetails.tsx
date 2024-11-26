import React, { FormEvent, useState } from "react";

const ProductDetails = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [totalAmount, setTotalAmount] = useState<number | null>(null);

  const calculateTotalAmount = () => {
    const total = parseFloat(price) * parseInt(quantity, 10);
    setTotalAmount(total);
  };

  const handleClear = (e: FormEvent) => {
    e.preventDefault();
    setName("");
    setPrice("");
    setQuantity("");
    setTotalAmount(null);
  };
  return (
    <div className="container mx-auto p-4">
      <h1>Enter Product Details</h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          calculateTotalAmount();
        }}
      >
        <div>
          <label className="block mb-2 text-sm font-medium">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter product name"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter product price"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter quantity"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Calculate
            </button>
            <button
              onClick={(e) => {
                handleClear(e);
              }}
              className="px-4 py-2 ml-4 bg-blue-600 text-white rounded"
            >
              Clear
            </button>
          </div>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              calculateTotalAmount();
            }}
            className="text-blue-600 underline"
          >
            Get Total Amount
          </a>
        </div>
      </form>
      {totalAmount !== null && (
        <p className="mt-4 text-lg font-medium">
          {`The Total Amount is: ${totalAmount}`}
        </p>
      )}
    </div>
  );
};

export default ProductDetails;
