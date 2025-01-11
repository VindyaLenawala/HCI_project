import React from "react";

const CommentPanel = ({ isOpen, onClose, comments, onAddComment }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ width: "400px", zIndex: 1000 }}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-black"
        onClick={onClose}
      >
        Close
      </button>

      {/* Comments Section */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Comments</h2>

        {/* Add a Comment */}
        <textarea
          placeholder="Leave a comment..."
          className="w-full p-2 border rounded mb-4"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              if (e.target.value.trim() !== "") {
                onAddComment(e.target.value);
                e.target.value = ""; // Clear input
              }
            }
          }}
        />
        <p className="text-sm text-gray-500">Press Enter to submit</p>

        {/* Comments List */}
        <div className="mt-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="mb-4">
                <p className="text-sm text-gray-700 font-bold">
                  User {index + 1}
                </p>
                <p className="text-sm text-gray-600">{comment}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentPanel;
