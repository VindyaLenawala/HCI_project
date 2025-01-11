import React, { useState } from "react";

const EditProfilePage = () => {
  const [profilePicture, setProfilePicture] = useState(
    "/public/portraits at work _ Are_na.jpg" // Initial profile picture
  );
  const [formData, setFormData] = useState({
    name: "Harshana Kumari", // Pre-filled with existing data
    email: "abcd@gmail.com",
    bio: "Passionate about web development and AI.",
  });
  const [showConfirmationModal, setShowConfirmationModal] = useState(false); // Modal visibility state

  // Handle profile picture upload
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result); // Update the profile picture
      };
      reader.readAsDataURL(file); // Read the uploaded image
    }
  };

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Show modal when Update button is clicked
  const handleUpdateClick = () => {
    setShowConfirmationModal(true);
  };

  // Handle confirmation action
  const handleConfirmUpdate = () => {
    setShowConfirmationModal(false);
    alert("Profile updated successfully!"); // Replace this with API call
  };

  // Handle cancellation action
  const handleCancelUpdate = () => {
    setShowConfirmationModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4 relative">
      {/* Title Section */}
      <h1 className="absolute top-6 text-3xl font-bold text-gray-800 text-center">
        Edit Profile
      </h1>

      {/* Main Content Box */}
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6 mt-20">
        {/* Profile Picture Section */}
        <div className="mb-6 text-center">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-gray-300" // Increased size
          />
          <label className="block text-blue-500 mt-3 cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfilePictureChange}
            />
            Change Profile Picture
          </label>
        </div>

        {/* Edit Profile Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdateClick();
          }}
        >
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Bio Field */}
          <div className="mb-4">
            <label htmlFor="bio" className="block text-gray-600 font-medium mb-1">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="3"
            ></textarea>
          </div>

          {/* Update Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Update
          </button>
        </form>
      </div>

      {/* Confirmation Modal */}
      {showConfirmationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Confirm Profile Update</h2>
            <p className="text-gray-600 mb-6">
              You are about to update your profile. Are you sure you want to proceed?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancelUpdate}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmUpdate}
                className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
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

export default EditProfilePage;
