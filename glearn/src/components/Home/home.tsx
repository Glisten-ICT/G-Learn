// pages/HomePage.tsx
import React, { useState } from "react";
import { Card, CardContent, Button } from "../ui/FallbackUI";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#E6E6EF] min-h-screen flex flex-col">
      {/* Updated Header */}
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
      <main className="flex-grow p-6">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold text-indigo-700 mb-4">Learn on the GO</h1>
          <p className="text-gray-600 mb-8">Explore our extensive collection of resources for both Teachers and Students.</p>
          
          {/* Image Placeholder */}
          <div className="bg-gray-200 h-64 rounded-lg mb-8 flex items-center justify-center">
            <span className="text-gray-500">Main Banner Image</span>
          </div>
          
          <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Get Started</Button>
        </section>

        {/* Stats Section */}
        <section className="py-12 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white p-6 rounded-lg">
            <div className="text-3xl font-bold text-indigo-700">100+</div>
            <div className="text-gray-600">Courses</div>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <div className="text-3xl font-bold text-indigo-700">10M+</div>
            <div className="text-gray-600">Users</div>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <div className="text-3xl font-bold text-indigo-700">10M+</div>
            <div className="text-gray-600">Downloads</div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12">
          <h2 className="text-2xl font-bold text-indigo-700 text-center mb-8">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Primary Category */}
            <Card>
              <CardContent>
                <div className="bg-gray-200 h-40 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Primary Category Image</span>
                </div>
                <h3 className="text-xl font-bold text-indigo-700 mb-2">Primary Category</h3>
                <p className="text-gray-600">Mathematics, English, Science</p>
              </CardContent>
            </Card>

            {/* Junior Secondary Category */}
            <Card>
              <CardContent>
                <div className="bg-gray-200 h-40 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Junior Secondary Image</span>
                </div>
                <h3 className="text-xl font-bold text-indigo-700 mb-2">Junior Secondary</h3>
                <p className="text-gray-600">Advanced subjects and courses</p>
              </CardContent>
            </Card>

            {/* Senior Secondary Category */}
            <Card>
              <CardContent>
                <div className="bg-gray-200 h-40 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Senior Secondary Image</span>
                </div>
                <h3 className="text-xl font-bold text-indigo-700 mb-2">Senior Secondary</h3>
                <p className="text-gray-600">Exam preparation and specialization</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12">
          <h2 className="text-2xl font-bold text-indigo-700 text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-indigo-700 mb-4">Personalised Roadmap</h3>
                <p className="text-gray-600">Customize your study plan according to your needs</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-indigo-700 mb-4">Quantified Rewards</h3>
                <p className="text-gray-600">Earn achievements and track your progress</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-indigo-700 mb-4">Video Library</h3>
                <p className="text-gray-600">Access comprehensive video lessons</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-white">
          <h2 className="text-2xl font-bold text-indigo-700 text-center mb-8">Success Stories</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-200 h-32 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">User Avatar</span>
            </div>
            <blockquote className="text-center italic text-gray-600 mb-4">
              "G-Learn has helped me with my recent success in both Maths and Science."
            </blockquote>
            <p className="text-center font-bold text-indigo-700">- Adamu Gabriel Chukse</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto bg-indigo-100 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-indigo-700 text-center mb-4">Need Assistance?</h2>
            <p className="text-center text-gray-600 mb-6">Contact us for any inquiries or support</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg text-center">
                <h3 className="font-bold text-indigo-700 mb-2">Phone Support</h3>
                <p className="text-gray-600">080-xxxxxxxx</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <h3 className="font-bold text-indigo-700 mb-2">Email Support</h3>
                <p className="text-gray-600">support@glearn.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md py-6 px-6 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 mb-4 md:mb-0">© 2023 G-LEARN. All rights reserved.</div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-indigo-600">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;