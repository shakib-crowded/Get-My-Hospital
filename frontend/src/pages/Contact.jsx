import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, X } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNotification(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setShowNotification(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Emergency Helpline",
      detail: "104",
      description: "24/7 Health Helpline",
      color: "bg-red-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "support@touchmyhospital.gov.in",
      description: "We reply within 24 hours",
      color: "bg-blue-500",
    },
    {
      icon: MapPin,
      title: "Head Office",
      detail: "Ministry of Health, New Delhi",
      description: "Government of India",
      color: "bg-green-500",
    },
    {
      icon: Clock,
      title: "Working Hours",
      detail: "24/7 Support",
      description: "Digital platform always available",
      color: "bg-purple-500",
    },
  ];

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer:
        "Visit the Hospitals page, select your preferred hospital and department, choose an available time slot, and confirm your booking.",
    },
    {
      question: "Is this service free?",
      answer:
        "Yes, Get My Hospital is a free government service. There are no charges for booking appointments or checking medicine availability.",
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer:
        "Yes, you can manage your appointments from the dashboard. We recommend doing so at least 24 hours in advance.",
    },
    {
      question: "What if I need emergency care?",
      answer:
        "For emergencies, please call 104 or visit the nearest hospital directly. This platform is for scheduled appointments and information.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 max-w-md">
            <CheckCircle size={24} />
            <p className="flex-1">
              Thank you for your message! We'll get back to you soon.
            </p>
            <button
              onClick={() => setShowNotification(false)}
              className="hover:bg-green-600 rounded p-1 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Contact Us
          </h1>
          <p className="text-base md:text-lg text-center opacity-90 max-w-2xl mx-auto">
            Get in touch with us for support, feedback, or partnership
            opportunities
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We're here to help you with any questions about our services.
              Reach out to us through any of the following channels.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`${info.color} text-white p-3 rounded-lg flex-shrink-0`}
                      >
                        <Icon size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-900 font-medium mb-1 break-words">
                          {info.detail}
                        </p>
                        <p className="text-sm text-gray-600">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                Send us a Message
              </h2>
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Contact;
