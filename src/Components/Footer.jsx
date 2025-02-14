import React from "react";


const Footer= () => {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/car.jpg-GpV7R4RV5ACts527BIGD4KQHSkkol8.jpeg"
                alt="Logo"
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400">Professional dog training and care services for your beloved pets.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Dog Training</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Dog Walking</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pet Sitting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Grooming</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Pet Street</li>
                <li>New York, NY 10001</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@petcare.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Pet Care Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;