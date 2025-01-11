import React, { useState } from "react";

const PublishPage = () => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  // Handle adding tags
  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag(""); // Clear the input after adding
    }
  };

  // Handle removing tags
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // Handle publish action
  const handlePublish = () => {
    setShowModal(true); // Show confirmation modal
  };

  // Confirm publishing
  const handleConfirmPublish = () => {
    setIsPublished(true);
    setShowModal(false);
  };

  // Cancel publishing
  const handleCancelPublish = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-8 py-8">
      {/* Left Section: Preview */}
      <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Preview</h2>
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">
          {/* Use image from the public folder */}
          <img
            src="/Mount Rainier, Washington (by   Protik Hossain).jpg"
            alt="Blog Banner"
            className="rounded-lg max-h-48 object-cover"
          />
        </div>
        <h3 className="mt-4 text-xl font-bold">Test Blog 1</h3>
      </div>

      {/* Right Section: Blog Details */}
      <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="blogTitle" className="block text-gray-600 font-medium mb-2">
            Blog Title
          </label>
          <input
            type="text"
            id="blogTitle"
            placeholder="Test Blog 1"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            readOnly
          />
        </div>

        <div className="mb-4">
          <label htmlFor="blogDescription" className="block text-gray-600 font-medium mb-2">
            Short Description about post
          </label>
          <textarea
            id="blogDescription"
            placeholder="Write a short description here..."
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="4"
            readOnly
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="tags" className="block text-gray-600 font-medium mb-2">
            Tags
          </label>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-indigo-500 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-2"
              >
                {tag}
                <button
                  onClick={() => handleRemoveTag(tag)}
                  className="text-white bg-transparent hover:bg-indigo-700 p-1 rounded-full"
                >
                  &times;
                </button>
              </span>
            ))}
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                className="border border-gray-300 px-4 py-2 rounded-lg"
                placeholder="Add a tag"
              />
              <button
                onClick={handleAddTag}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={handlePublish}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md w-full"
        >
          Publish
        </button>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-md w-1/3">
            <h2 className="text-lg font-semibold mb-4">Are you sure you want to publish?</h2>
            <div className="flex justify-between">
              <button
                onClick={handleConfirmPublish}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Yes, Publish
              </button>
              <button
                onClick={handleCancelPublish}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {isPublished && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-md w-1/3">
            <h2 className="text-lg font-semibold mb-4">Success!</h2>
            <p>Your post has been successfully published and can be viewed in your published posts under the Manage Blog section.</p>
            <button
              onClick={() => setIsPublished(false)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublishPage;
