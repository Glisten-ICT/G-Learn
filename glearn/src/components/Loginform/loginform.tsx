// pages/LoginPage.tsx
import React, { useState } from "react";
import { Card, CardContent } from "../ui/FallbackUI";
import { Button, Input } from "../ui/FallbackUI";
import { Link, useNavigate } from "react-router-dom";


const Loginform = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const navigate = useNavigate();

  const handleAuthSuccess = () => {
    navigate("/home"); // Redirect to home after successful login/signup
  };

  return (
    <div className="bg-[#E6E6EF] min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between relative">
        <Link to="/" className="text-xl font-bold text-indigo-700">G-LEARN</Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/home" className="text-gray-600 hover:text-indigo-600">Home</Link>
          <Link to="/login" className="text-gray-600 hover:text-indigo-600">Log in</Link>
          <Link to="/login" className="text-gray-600 hover:text-indigo-600">Sign up</Link>
          <Link to="/library" className="text-gray-600 hover:text-indigo-600">Library Catalog</Link>
          <Link to="/about" className="text-gray-600 hover:text-indigo-600">About Us</Link>
          <Link to="/help" className="text-gray-600 hover:text-indigo-600">Help/FAQs</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute md:hidden top-full left-0 right-0 bg-white shadow-lg py-2 px-4 z-50">
            <nav className="flex flex-col space-y-3">
              <Link to="/home" className="text-gray-600 hover:text-indigo-600 py-2">Home</Link>
              <Link to="/login" className="text-gray-600 hover:text-indigo-600 py-2">Log in</Link>
              <Link to="/login" className="text-gray-600 hover:text-indigo-600 py-2">Sign up</Link>
              <Link to="/library" className="text-gray-600 hover:text-indigo-600 py-2">Library Catalog</Link>
              <Link to="/about" className="text-gray-600 hover:text-indigo-600 py-2">About Us</Link>
              <Link to="/help" className="text-gray-600 hover:text-indigo-600 py-2">Help/FAQs</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="flex-grow flex justify-center items-center p-4">
        <Card className="w-full max-w-xl p-8 bg-white shadow-2xl rounded-xl">
          <CardContent>
            {/* Welcome Banner */}
            <div className="text-center mb-8 px-2 sm:px-0">
              <div className="bg-[#3A3E7E] text-white 
                          py-3 px-4 
                          xs:py-4 xs:px-5
                          sm:py-4 sm:px-6
                          md:py-5 md:px-8
                          rounded-lg
                          max-w-[280px]
                          xs:max-w-xs
                          sm:max-w-sm
                          md:max-w-md
                          mx-auto
                          transition-all duration-200">
                <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl
                            font-bold tracking-wide mb-1 xs:mb-1.5 sm:mb-2
                            leading-tight break-words">
                  WELCOME TO G-LEARN
                </h1>
                <p className="text-xs xs:text-sm sm:text-base
                          opacity-90 leading-snug px-1">
                  Learning on the go!
                </p>
              </div>
            </div>

            {/* Login/Signup Tabs */}
            <div className="flex justify-center mb-6 border-b border-gray-200">
              <Button
                variant="key"
                onClick={() => setIsLogin(true)}
                className={`px-6 py-2 text-base font-medium border-r border-gray-200 ${
                  isLogin ? "text-red-600 border-b-2 border-red-600" 
                  : "text-gray-600 hover:text-red-600 hover:border-b-2 hover:border-red-600"
                }`}
              >
                Login
              </Button>
              <Button
                variant="key"
                onClick={() => setIsLogin(false)}
                className={`px-6 py-2 text-base font-medium ${
                  !isLogin ? "text-red-600 border-b-2 border-red-600" 
                  : "text-gray-600 hover:text-red-600 hover:border-b-2 hover:border-red-600"
                }`}
              >
                Sign Up
              </Button>
            </div>

            {/* Form Content */}
            {isLogin ? (
              <LoginForm onSuccess={handleAuthSuccess} />
            ) : (
              <SignupForm onSuccess={handleAuthSuccess} />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Extracted Login Form Component
const LoginForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login form submitted");
    onSuccess(); // Redirect after successful login
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="email" placeholder="Email" className="mb-4" />
      <Input type="password" placeholder="Password" className="mb-4" />

      <div className="flex items-center justify-between mb-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span>Remember me?</span>
        </label>
        <a href="#" className="text-indigo-600 hover:underline">
          Forgot password?
        </a>
      </div>

      <Button type="submit" className="w-full bg-indigo-600 text-white hover:bg-indigo-700 py-2 rounded-md">
        Login
      </Button>

      <div className="mt-4">
        <Button variant="btn">
          Login with Google
        </Button>
      </div>
    </form>
  );
};

// Extracted Signup Form Component
const SignupForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your signup logic here
    console.log("Signup form submitted");
    onSuccess(); // Redirect after successful signup
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <Input type="text" placeholder="First Name" className="mb-4" />
        <Input type="text" placeholder="Last Name" className="mb-4" />
      </div>

      <Input type="text" placeholder="Class" className="mb-4" />

      <div className="grid grid-cols-2 gap-4">
        <Input type="text" placeholder="State" className="mb-4" />
        <Input type="date" placeholder="Date of Birth" className="mb-4" />
      </div>

      <div className="mb-4">
        <p className="text-gray-700 mb-2">Gender</p>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input type="radio" name="gender" value="male" className="form-radio" />
            <span>Male</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="gender" value="female" className="form-radio" />
            <span>Female</span>
          </label>
        </div>
      </div>

      <Input type="email" placeholder="Email" className="mb-4" />
      <Input type="password" placeholder="Password" className="mb-2" />
      <PasswordRequirements />
      <Input type="password" placeholder="Confirm Password" className="mb-4" />

      <Button type="submit" className="w-full bg-indigo-600 text-white hover:bg-indigo-700 py-2 rounded-md mb-4">
        Submit
      </Button>

      <Button variant="btn">
        Sign Up with Google
      </Button>
    </form>
  );
};

// Extracted Password Requirements Component
const PasswordRequirements = () => (
  <>
    <p className="text-sm text-gray-500 mb-4">
      Password must contain at least 8 characters,
    </p>
    <p className="text-sm text-gray-500 mb-4">including 1 uppercase letter, </p>
    <p className="text-sm text-gray-500 mb-4">1 lowercase letter,</p>
    <p className="text-sm text-gray-500 mb-4">1 number.</p>
  </>
);

export default Loginform;