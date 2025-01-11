import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <div className="h-screen w-screen relative">
      {/* Background Image */}
      <div className="full-page-background absolute inset-0 flex items-center justify-center">
        <SignIn signUpUrl="/register" />
      </div>

      {/* Login Message at the top */}
      <div className="signin-message absolute top-10 left-1/2 transform -translate-x-1/2 text-5xl font-bold font-serif">
        Welcome Back
      </div>
    </div>
  );
};

export default LoginPage;
