import { SignUp } from "@clerk/clerk-react";

const RegisterPage = () => {
  return (
    <div className="h-screen w-screen relative">
      {/* Background Image */}
      <div className="full-page-background absolute inset-0 flex items-center justify-center">
        {/* Content container for centering text and SignUp */}
        <div className="text-center">
          {/* Register Message */}
          <div className="signin-message absolute top-10 left-1/2 transform -translate-x-1/2 text-5xl font-bold font-serif">
            Join Us Today
          </div>

          {/* SignUp form */}
          <div className="w-full max-w-md mt-24"> {/* Add margin-top to create space */}
            <SignUp signInUrl="/login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
