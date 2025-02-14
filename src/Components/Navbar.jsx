import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/car.jpg-GpV7R4RV5ACts527BIGD4KQHSkkol8.jpeg"
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-purple-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-purple-600">Services</a>
          <a href="#" className="text-gray-600 hover:text-purple-600">About</a>
          <a href="#" className="text-gray-600 hover:text-purple-600">Contact</a>
        </div>

        {/* Book Now Button */}
        <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">
          Book Now
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Services</a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About</a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}
