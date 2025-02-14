import React from "react";
import { motion } from "framer-motion";

const services = [
  { id: 1, title: "Dog Training", description: "Professional training services for all breeds", image: "https://i.pinimg.com/236x/39/a3/87/39a387fac1f8ea007acb249cc003f099.jpg" },
  { id: 2, title: "Dog Walking", description: "Regular exercise and outdoor activities", image: "https://i.pinimg.com/236x/ba/d9/b2/bad9b242246ad9e573b46c2f514e04c8.jpg" },
  { id: 3, title: "Pet Sitting", description: "Care for your pet while you're away", image: "https://i.pinimg.com/236x/0c/7a/1b/0c7a1bad9cd7fa650026b78a360cb783.jpg" },
  { id: 4, title: "Grooming", description: "Professional grooming and spa services", image: "https://i.pinimg.com/236x/e6/7d/32/e67d327a354e6ce7e163d63e1962b517.jpg" },
];

const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Dog Owner",
      content: "The training services have been amazing for my dog. Highly recommended!",
      image: "https://i.pinimg.com/236x/78/3b/99/783b994e475f6c0b9df1c863047334a4.jpg",
    },
    {
      id: 2,
      name: "Mike Wilson",
      role: "Dog Owner",
      content: "Professional and caring service. My dog loves going here!",
      image: "https://i.pinimg.com/236x/18/e3/c4/18e3c49a260d671226f0bec9d0474852.jpg",
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Pet Enthusiast",
      content: "The grooming services are top-notch! My pup looks adorable after every visit.",
      image: "https://i.pinimg.com/236x/4c/97/8b/4c978be705e405c62ca68dce4af7a56c.jpg",
    },
    {
      id: 4,
      name: "John Smith",
      role: "Dog Trainer",
      content: "I’ve worked with many pet care services, and this one truly stands out in quality and professionalism!",
      image: "https://i.pinimg.com/236x/bd/e0/32/bde03286b3da6d7bb59b6740cdaf7b9e.jpg",
    },
];
  

export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20">
  <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Side - Text Content */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Professional Dog Training & Care Services
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Expert training and care for your beloved pets. We provide professional services to ensure your dog's happiness and well-being.
        </p>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700">
          Learn More
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="flex justify-center">
        <img
          src="https://i.pinimg.com/236x/db/e9/a2/dbe9a2d8dcf5bf4c61ddfdded6d3145f.jpg"
          alt="Happy Dog Training"
          className="w-full h-auto max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>


      {/* Services Section */}
      <section className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          className="group"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-4 text-purple-600 font-medium hover:text-purple-700">
                Learn More →
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-900 text-white relative">
        <div className="absolute inset-0">
          <img
            src="/background.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-gray-300">Dogs Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-gray-300">Expert Trainers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Dogs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Dogs Are Amazing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Dogs are not just pets; they are loyal companions, protectors, and members of our families.
                They provide emotional support, help reduce stress, and even improve physical health.
                Whether they are assisting people with disabilities, serving in the police force, or just being a
                loving family member, dogs play an incredible role in our lives.
              </p>
              <p className="text-lg text-gray-600">
                With the right training, care, and love, your dog can be the best companion you ever had.
                Join us in making their lives better through professional training and services!
              </p>
            </div>
            <div>
              <img src="https://i.pinimg.com/474x/68/79/25/687925314776cf55ffd56d36d6d36a27.jpg" alt="Happy Dog" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
