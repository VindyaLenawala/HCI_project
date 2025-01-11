import { NavLink, Outlet } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'Roboto', sans-serif" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "260px",
          background: "linear-gradient(135deg,rgb(129, 175, 246),rgb(200, 147, 234))",
          color: "#fff",
          padding: "20px",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            marginBottom: "30px",
            textAlign: "center",
            color: "black",
            fontWeight: "bold",
            borderBottom: "1px solid #475569",
            paddingBottom: "10px",
          }}
        >
          Dashboard
        </h2>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {/* Blogs Section */}
            <li style={{ marginBottom: "20px" }}>
            <NavLink
                to="blogs" // This links to /dashboard/blogs
                style={({ isActive }) => ({
                display: "block",
                textDecoration: "none",
                color: isActive ? "#38bdf8" : "#fff",
                padding: "10px 15px",
                borderRadius: "8px",
                background: isActive ? "#1e40af" : "transparent",
                fontWeight: "bold",
                transition: "background 0.3s, color 0.3s",
             })}
            >
                📝 Blogs
            </NavLink>

            </li>

            {/* Settings Section */}
            <li style={{ marginBottom: "15px", fontWeight: "bold", color: "black" }}>
              Settings
            </li>
            <ul style={{ listStyle: "none", paddingLeft: "15px", marginBottom: "20px" }}>
              <li style={{ marginBottom: "10px" }}>
                <NavLink
                  to="edit-profile"
                  style={({ isActive }) => ({
                    display: "block",
                    textDecoration: "none",
                    color: isActive ? "#38bdf8" : "#fff",
                    padding: "10px 15px",
                    borderRadius: "8px",
                    background: isActive ? "#1e40af" : "transparent",
                    fontWeight: "bold",
                    transition: "background 0.3s, color 0.3s",
                  })}
                >
                  ✏️ Edit Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="change-password"
                  style={({ isActive }) => ({
                    display: "block",
                    textDecoration: "none",
                    color: isActive ? "#38bdf8" : "#fff",
                    padding: "10px 15px",
                    borderRadius: "8px",
                    background: isActive ? "#1e40af" : "transparent",
                    fontWeight: "bold",
                    transition: "background 0.3s, color 0.3s",
                  })}
                >
                  🔒 Change Password
                </NavLink>
              </li>
            </ul>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main
        style={{
          flex: 1,
          padding: "20px",
          background: "#f1f5f9",
          overflowY: "auto",
        }}
      >
        <Outlet /> {/* Nested routes will render here */}
      </main>
    </div>
  );
};

export default DashboardPage;
