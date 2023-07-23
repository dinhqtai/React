import React, { useState } from "react";

const Search = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Trang chủ */}
      <button
        onClick={toggleForm}
        className="px-4 py-2 text-white bg-blue-500 rounded"
      >
        Sign Up
      </button>

      {/* Form sign up */}
      {showForm && (
        <div
          onClick={toggleForm}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white p-4 rounded shadow-md">
            {/* Nội dung form sign up sẽ ở đây */}
            <h2 className="text-2xl font-bold mb-4">Sign Up Form</h2>
            <form>
              <label htmlFor="email" className="block mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded px-2 py-1 mb-4"
              />

              <label htmlFor="password" className="block mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded px-2 py-1 mb-4"
              />

              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
