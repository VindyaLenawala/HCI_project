import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
    return (
      <div className="flex flex-col xl:flex-row gap-8">
        {/* image */}
          <div className="md:hidden xl:block xl:w-1/3">
            <Image src="Crested Butte, Colorado_ 8 Things To Do Besides Skiing.jpg" className="rounded-2xl object-cover" w="735"/>
          </div>
        {/* details */}
        <div className="flex flex-col gap-4 xl:w-2/3">
          <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Adipisci praesentium neque error.
          </Link>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Nature</Link>
            <span>2 days ago</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Autem error soluta dolor laboriosam ullam, repudiandae nesciunt ratione 
             a dolorum quasi tenetur. Vero obcaecati libero ad vitae eligendi. 
             Nihil, qui consectetur!
          </p>
          <Link to="/test" className="underline text-blue-800 text-sm">
            Read More
          </Link>
        </div>
      </div>
    );
  };

export default PostListItem;
