import React, { useState } from "react";
import { FaHeart } from "react-icons/fa"; // Import heart icon from React Icons

const BlogsPage = () => {
  // Sample data for Published and Draft blogs
  const publishedBlogs = [
    {
      id: 1,
      title: "Understanding React",
      description: "Learn the basics of React and how it can help you build powerful user interfaces.",
      date: "2025-01-10",
      image: "/public/Travel with loving hubby.jpg",
      likes: 120,
      comments: 45,
    },
    {
      id: 2,
      title: "State Management",
      description: "Master state management with Redux and streamline your app's data flow.",
      date: "2025-01-09",
      image: "/public/Mount Rainier, Washington (by   Protik Hossain).jpg",
      likes: 89,
      comments: 30,
    },
  ];

  const draftBlogs = [
    {
      id: 3,
      title: "Exploring Node.js",
      description: "Dive deep into Node.js and learn how to build scalable backend systems.",
      date: "2025-01-08",
      image: "/public/Van Life.jpg",
      likes: 50,
      comments: 10,
    },
  ];

  // State for active tab and search
  const [activeTab, setActiveTab] = useState("published"); // Default tab
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [selectedBlogId, setSelectedBlogId] = useState(null); // Store the selected blog's ID for deletion

  // Filter blogs based on the search query
  const filteredBlogs =
    activeTab === "published"
      ? publishedBlogs.filter((blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : draftBlogs.filter((blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

  // Handle delete confirmation modal
  const handleDelete = (id) => {
    setSelectedBlogId(id); // Set the selected blog's ID
    setIsModalOpen(true); // Open the modal
  };

  // Confirm the deletion
  const confirmDelete = () => {
    // Proceed with the deletion (you can implement actual deletion logic here)
    alert(`Blog with id ${selectedBlogId} deleted!`);
    // You would likely update state to remove the blog here
    setIsModalOpen(false); // Close the modal after confirmation
  };

  // Cancel the deletion
  const cancelDelete = () => {
    setIsModalOpen(false); // Close the modal without deleting
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Manage Blogs Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Manage Blogs</h1>

      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <button
          className={`px-6 py-2 font-medium ${
            activeTab === "published"
              ? "text-white bg-blue-500"
              : "text-blue-500 bg-white"
          } border border-blue-500 rounded-l-md hover:bg-blue-500 hover:text-white`}
          onClick={() => setActiveTab("published")}
        >
          Published
        </button>
        <button
          className={`px-6 py-2 font-medium ${
            activeTab === "drafts"
              ? "text-white bg-blue-500"
              : "text-blue-500 bg-white"
          } border border-blue-500 rounded-r-md hover:bg-blue-500 hover:text-white`}
          onClick={() => setActiveTab("drafts")}
        >
          Drafts
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img
            src="/search-icon.png"
            alt="Search Icon"
            className="absolute left-3 top-3 w-6 h-6"
          />
        </div>
      </div>

      {/* Blogs List */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              {/* Blog Title */}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
              {/* Blog Description */}
              <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
              {/* Blog Info */}
              <div className="flex justify-between items-center text-gray-500 text-sm mb-6">
                <div className="flex items-center space-x-3">
                  {/* Heart Icon for Likes */}
                  <span className="flex items-center space-x-1">
                    <FaHeart style={{ color: "red", fontSize: "18px" }} />
                    <span>{blog.likes}</span>
                  </span>
                  {/* Comments Icon */}
                  <span className="flex items-center space-x-1">
                    <span>💬</span>
                    <span>{blog.comments}</span>
                  </span>
                </div>
              </div>
              {/* Buttons Section */}
              <div className="flex justify-between mt-auto space-x-3">
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
                  Edit
                </button>
                <button
                  className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
                  onClick={() => handleDelete(blog.id)} // Trigger delete confirmation
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No blogs found.</p>
        )}
      </div>

      {/* Custom Delete Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Confirm Deletion</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this blog? This action cannot be undo.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
