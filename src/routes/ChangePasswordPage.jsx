import React, { useState } from "react";

const ChangePasswordPage = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false); // Toggle visibility for current password
  const [showNewPassword, setShowNewPassword] = useState(false); // Toggle visibility for new password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle visibility for confirm password

  const mockCurrentPassword = "demoCurrent123"; // Mock password for demonstration

  const handleCurrentPasswordSubmit = (e) => {
    e.preventDefault();
    if (currentPassword === mockCurrentPassword) {
      setIsPasswordCorrect(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Current password is incorrect!");
    }
  };

  const handleChangePasswordClick = () => {
    if (newPassword !== confirmNewPassword) {
      setErrorMessage("New passwords do not match!");
    } else {
      setErrorMessage("");
      setShowConfirmationModal(true);
    }
  };

  const handleConfirmChangePassword = () => {
    setShowConfirmationModal(false);
    alert("Password changed successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setIsPasswordCorrect(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      {/* Centered Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Change Password</h1>

      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        {/* Current Password Section */}
        <form onSubmit={handleCurrentPasswordSubmit}>
          <div className="mb-4 relative">
            <label
              htmlFor="current-password"
              className="block text-gray-600 font-medium mb-1"
            >
              Current Password
            </label>
            <div className="relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                id="current-password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              {/* Toggle Icon */}
              <img
                src={showCurrentPassword ? "/eye-open.png" : "/eye-closed.png"}
                alt="Toggle visibility"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute top-2/4 right-3 transform -translate-y-2/4 cursor-pointer w-6 h-6"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
          >
            Validate Current Password
          </button>
        </form>

        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}

        {/* New Password Section */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleChangePasswordClick();
          }}
        >
          <fieldset disabled={!isPasswordCorrect}>
            <div className="mb-4 relative">
              <label
                htmlFor="new-password"
                className="block text-gray-600 font-medium mb-1"
              >
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  id="new-password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
                {/* Toggle Icon */}
                <img
                  src={showNewPassword ? "/eye-open.png" : "/eye-closed.png"}
                  alt="Toggle visibility"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute top-2/4 right-3 transform -translate-y-2/4 cursor-pointer w-6 h-6"
                />
              </div>
            </div>

            <div className="mb-4 relative">
              <label
                htmlFor="confirm-new-password"
                className="block text-gray-600 font-medium mb-1"
              >
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-new-password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
                {/* Toggle Icon */}
                <img
                  src={showConfirmPassword ? "/eye-open.png" : "/eye-closed.png"}
                  alt="Toggle visibility"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute top-2/4 right-3 transform -translate-y-2/4 cursor-pointer w-6 h-6"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              Change Password
            </button>
          </fieldset>
        </form>
      </div>

      {/* Confirmation Modal */}
      {showConfirmationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Confirm Password Change</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to change your password?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowConfirmationModal(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmChangePassword}
                className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-500 focus:outline-none"
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

export default ChangePasswordPage;
