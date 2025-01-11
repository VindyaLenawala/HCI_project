import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBold, FaItalic, FaAlignLeft, FaAlignCenter, FaAlignRight, FaTextHeight } from "react-icons/fa"; // Icons for styling

const Write = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [bannerImage, setBannerImage] = useState(null);
  const [showToolbar, setShowToolbar] = useState(false); // To toggle the toolbar visibility
  const [textFormat, setTextFormat] = useState({
    bold: false,
    italic: false,
    alignment: "left", // Options: left, center, right
    textSize: "medium", // Options: small, medium, large
  });
  const [draftMessage, setDraftMessage] = useState(""); // To store draft message

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBannerImage(URL.createObjectURL(file));
    }
  };

  const handlePublish = () => {
    navigate("/publish");
  };

  const handleSaveDraft = () => {
    setDraftMessage("Blog post has been saved to Draft section in profile."); // Show draft saved message
    setTimeout(() => setDraftMessage(""), 3000); // Hide message after 3 seconds
  };

  const toggleTextStyle = (style) => {
    setTextFormat((prev) => ({
      ...prev,
      [style]: !prev[style],
    }));
  };

  const applyStyles = (content) => {
    let styledContent = content;

    if (textFormat.bold) {
      styledContent = `<b>${styledContent}</b>`;
    }
    if (textFormat.italic) {
      styledContent = `<i>${styledContent}</i>`;
    }
    if (textFormat.alignment === "center") {
      styledContent = `<div style="text-align:center;">${styledContent}</div>`;
    } else if (textFormat.alignment === "right") {
      styledContent = `<div style="text-align:right;">${styledContent}</div>`;
    }
    if (textFormat.textSize === "small") {
      styledContent = `<span style="font-size: 12px;">${styledContent}</span>`;
    } else if (textFormat.textSize === "large") {
      styledContent = `<span style="font-size: 20px;">${styledContent}</span>`;
    }

    return styledContent;
  };

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(applyStyles(newContent));
  };

  const handleFocus = () => {
    setShowToolbar(true); // Show toolbar when the text area is focused
  };

  const handleBlur = () => {
    if (!content.trim()) {
      setShowToolbar(false); // Hide toolbar when content is empty
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with Save and Publish Buttons */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleSaveDraft}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 mr-3"
        >
          Save Draft
        </button>
        <button
          onClick={handlePublish}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          Publish
        </button>
      </div>

      {/* Display Draft Message */}
      {draftMessage && (
        <div className="mb-4 p-4 bg-green-500 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-500 ease-in-out opacity-100 scale-105">
          <span className="mr-2">✅</span>
          {draftMessage}
        </div>
      )}

      {/* Blog Banner, Title, and Content Section */}
      <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
        {/* Banner Upload */}
        <input
          type="file"
          id="bannerUpload"
          className="hidden"
          onChange={handleImageUpload}
        />
        <label
          htmlFor="bannerUpload"
          className="block w-full h-64 bg-gray-100 flex items-center justify-center cursor-pointer"
        >
          {bannerImage ? (
            <img
              src={bannerImage}
              alt="Blog Banner"
              className="object-cover w-full h-full"
            />
          ) : (
            <span className="text-gray-500">Click to upload a banner image</span>
          )}
        </label>

        {/* Blog Title */}
        <div className="p-4">
          <input
            type="text"
            placeholder="Blog Title"
            className="w-full px-4 py-2 text-xl font-semibold text-gray-800 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Blog Content */}
        <div className="relative">
          <textarea
            placeholder="Let’s write an awesome story!"
            className="w-full mt-4 px-4 py-4 text-gray-600 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 h-48" // Increased height here
            value={content}
            onChange={handleContentChange}
            onFocus={handleFocus} // Show toolbar when focused
            onBlur={handleBlur}   // Hide toolbar when blur if content is empty
          />

          {/* "+" button appears when the user clicks into the textarea */}
          {showToolbar && (
            <div
              className="absolute top-2 left-2 p-2 bg-blue-500 text-white rounded-full cursor-pointer shadow-lg hover:bg-blue-600 transition-all transform scale-125"
              onClick={() => setShowToolbar(!showToolbar)} // Toggle toolbar visibility
            >
              +
            </div>
          )}

          {/* Styling Toolbar */}
          {showToolbar && (
            <div className="absolute top-16 left-2 p-3 bg-white border rounded-lg shadow-lg z-10">
              <div className="flex gap-2 items-center">
                <button
                  className={`p-2 rounded-full ${textFormat.bold ? "bg-blue-500 text-white" : "bg-gray-100"}`}
                  onClick={() => toggleTextStyle("bold")}
                >
                  <FaBold />
                </button>
                <button
                  className={`p-2 rounded-full ${textFormat.italic ? "bg-blue-500 text-white" : "bg-gray-100"}`}
                  onClick={() => toggleTextStyle("italic")}
                >
                  <FaItalic />
                </button>
                <button
                  className={`p-2 rounded-full ${textFormat.alignment === "left" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
                  onClick={() => setTextFormat((prev) => ({ ...prev, alignment: "left" }))}
                >
                  <FaAlignLeft />
                </button>
                <button
                  className={`p-2 rounded-full ${textFormat.alignment === "center" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
                  onClick={() => setTextFormat((prev) => ({ ...prev, alignment: "center" }))}
                >
                  <FaAlignCenter />
                </button>
                <button
                  className={`p-2 rounded-full ${textFormat.alignment === "right" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
                  onClick={() => setTextFormat((prev) => ({ ...prev, alignment: "right" }))}
                >
                  <FaAlignRight />
                </button>
                <select
                  value={textFormat.textSize}
                  onChange={(e) => setTextFormat((prev) => ({ ...prev, textSize: e.target.value }))}
                  className="px-4 py-2 bg-gray-100 rounded-lg text-sm"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Write;
