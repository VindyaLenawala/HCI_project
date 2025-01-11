import React, { useState } from "react";
import { FaHeart, FaComment, FaFacebook, FaLinkedin, FaTwitter, FaTrash, FaEdit } from "react-icons/fa";

const SinglePostPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, user: "John Doe", text: "Great article! Totally loved the tips on decluttering." },
    { id: 2, user: "Jane Smith", text: "I really need to try minimalism. Thanks for the inspiration!" },
    { id: 3, user: "You", text: "This is a comment from me." }, // Added an example of "You" comment
  ]);
  const [newComment, setNewComment] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const addComment = () => {
    if (newComment.trim()) {
      const newCommentObj = { id: Date.now(), user: "You", text: newComment };
      setComments([newCommentObj, ...comments]);
      setNewComment("");
    }
  };

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const editComment = (id, updatedText) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id ? { ...comment, text: updatedText } : comment
    );
    setComments(updatedComments);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mt-8 relative">
      {/* Post Image */}
      <img
        src="/Best rural town in England & Wales to relocate to revealed.jpg"
        alt="Post"
        className="w-full max-w-[800px] mx-auto object-cover"
      />

      {/* Post Content */}
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">
          Cultivating a Minimalist Lifestyle: A Journey to Intentional Living
        </h1>

        <div className="mb-4">
          <span className="text-sm text-white bg-blue-500 px-3 py-1 rounded-full">Life</span>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <span>Olivia Stone</span>
          <span>Published on Dec 10, 2024</span>
        </div>

        <hr className="my-2 border-t-2 border-black" />

        {/* Icons Section */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4 text-gray-500">
            <div className="flex items-center gap-1 cursor-pointer">
              <FaHeart className="text-red-500" />
              <span>3</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer" onClick={toggleSidebar}>
              <FaComment />
              <span>5</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700">
              <FaLinkedin />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
              <FaTwitter />
            </a>
          </div>
        </div>

        <hr className="my-2 border-t-2 border-black" />

        <div className="prose max-w-none mb-6">
          <p>
          In today’s fast-paced world, where abundance often equates to success, a minimalist lifestyle offers a refreshing shift toward intentionality. It’s not just about owning fewer possessions—it’s about making space for what truly matters in life. Minimalism can help reduce stress, increase focus, and foster a sense of contentment. Here’s how you can start your journey.
          Minimalism begins with understanding your "why." Reflect on why you want to simplify your life. Is it to find peace in a clutter-free space, save money, or have more time for meaningful activities? Having clarity about your motivations will give you purpose and help guide your decisions as you embrace minimalism.
          Decluttering is often the first step, but it’s more than just clearing out your closet. It’s about letting go of what no longer serves you and keeping only what adds value or joy. Start small by focusing on one area at a time, such as your wardrobe or kitchen. A useful method is the "90/90 rule": ask yourself if you’ve used an item in the last 90 days and if you’ll use it in the next 90. If not, it might be time to let it go.
          Digital clutter can be just as overwhelming as physical mess. 
          </p>

          <img
            src="/Mount Rainier, Washington (by   Protik Hossain).jpg"
            alt="Additional Visual"
            className="w-full max-w-[600px] mx-auto object-contain rounded-lg"
          />

          <p>
          Consider practicing digital minimalism by unsubscribing from unnecessary emails, deleting unused apps, and organizing your devices. Set boundaries with technology, such as establishing screen-free zones or times. Simplifying your digital life creates mental clarity and reduces the stress of constant connectivity.
          A helpful practice in minimalism is the "one in, one out" rule. For every new item you bring into your life, let go of an old one. This approach prevents clutter from accumulating and keeps your possessions intentional. If you buy a new pair of shoes, donate an old pair that no longer fits your lifestyle. This habit encourages thoughtful consumption and helps maintain balance.
          Minimalism isn’t just about things—it’s also about time. A cluttered schedule can leave you feeling just as overwhelmed as a cluttered home. Simplify your commitments by saying no to activities that don’t align with your priorities. Focus on what truly matters, whether it’s spending time with loved ones, pursuing hobbies, or simply taking time to rest.
          Embracing minimalism is not about deprivation; it’s about freedom. By focusing on what adds value to your life, you can create a space—physically and mentally—that nurtures joy and fulfillment. Start small, stay intentional, and watch how minimalism transforms your life.
          </p>
        </div>

        <hr className="my-4 border-t-2 border-gray-300" />

        {/* Similar Blogs */}
        <div className="pt-4">
          <h2 className="text-xl font-semibold mb-4">Similar Blogs</h2>
          <div className="grid gap-6">
            <div className="flex items-start">
              <img src="/Travel with loving hubby.jpg" alt="Similar Blog" className="w-20 h-20 object-contain rounded-md" />
              <div className="ml-4">
                <span className="text-sm text-white bg-blue-500 px-3 py-1 rounded-full">Travel</span>
                <a href="/path-to-similar-post" className="text-lg font-semibold text-blue-600 underline">
                  How to Cultivate a Minimalist Lifestyle
                </a>
                <p className="text-gray-500 text-sm mt-2">Explore practical tips for embracing minimalism in everyday life.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar - Comments Section */}
      <div
        className={`fixed top-0 right-0 w-96 bg-white shadow-lg h-full z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Comment Section</h2>
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            className="w-full p-2 border rounded-md mb-4"
            placeholder="Write your comment here..."
          />
          <button
            onClick={addComment}
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Add Comment
          </button>

          <h3 className="text-xl font-semibold mt-6">Comments</h3>
          <div className="mt-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <span className="font-semibold">{comment.user}</span>
                  <p>{comment.text}</p>
                </div>
                <div className="flex items-center gap-2">
                  {comment.user === "You" && (
                    <>
                      <FaEdit
                        className="cursor-pointer text-blue-500"
                        onClick={() => editComment(comment.id, prompt("Edit your comment", comment.text))}
                      />
                      <FaTrash
                        className="cursor-pointer text-red-500"
                        onClick={() => deleteComment(comment.id)}
                      />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
