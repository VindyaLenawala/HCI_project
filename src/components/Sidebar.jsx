// Sidebar component
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link> {/* This links to default BlogsPage */}
        </li>
        <li>
          <Link to="/dashboard">Blogs</Link> {/* Clicking this will also show BlogsPage */}
        </li>
        {/* Other sidebar links */}
      </ul>
    </nav>
  );
};

export default Sidebar;
