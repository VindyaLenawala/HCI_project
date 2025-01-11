import { Outlet } from "react-router-dom";

const firstPageLayout = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/backgroundImage.png')", // Adjust path if necessary
      }}
    >
        <Outlet />
    </div>
  );
};

export default firstPageLayout;
