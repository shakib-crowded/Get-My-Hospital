import React from "react";
import { Clock, Pill, MapPin, Hospital, Shield, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "OPD Slot Booking",
      description:
        "Book appointments in government hospitals with real-time slot availability and instant confirmation",
      color: "#4fc3f7",
      gradient: "from-cyan-400 to-blue-400",
      bgColor:
        "bg-cyan-50 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-blue-400",
      textColor: "text-cyan-500",
      shadowColor: "shadow-cyan-200",
    },
    {
      icon: Pill,
      title: "Medicine Stock Check",
      description:
        "Check availability of medicines before visiting the hospital and reserve them in advance",
      color: "#81c784",
      gradient: "from-green-400 to-emerald-500",
      bgColor:
        "bg-green-50 hover:bg-gradient-to-br hover:from-green-400 hover:to-emerald-500",
      textColor: "text-green-500",
      shadowColor: "shadow-green-200",
    },
    {
      icon: MapPin,
      title: "Hospital Locator",
      description:
        "Find nearby government hospitals with detailed information, directions, and contact details",
      color: "#ff8a65",
      gradient: "from-orange-400 to-red-400",
      bgColor:
        "bg-orange-50 hover:bg-gradient-to-br hover:from-orange-400 hover:to-red-400",
      textColor: "text-orange-500",
      shadowColor: "shadow-orange-200",
    },
    {
      icon: Hospital,
      title: "Real-time Updates",
      description:
        "Get live updates on slot availability, medicine stock, and hospital services",
      color: "#ba68c8",
      gradient: "from-purple-400 to-pink-400",
      bgColor:
        "bg-purple-50 hover:bg-gradient-to-br hover:from-purple-400 hover:to-pink-400",
      textColor: "text-purple-500",
      shadowColor: "shadow-purple-200",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "Your medical data is encrypted and stored securely with government-grade security protocols",
      color: "#ffb74d",
      gradient: "from-amber-400 to-orange-500",
      bgColor:
        "bg-amber-50 hover:bg-gradient-to-br hover:from-amber-400 hover:to-orange-500",
      textColor: "text-amber-500",
      shadowColor: "shadow-amber-200",
    },
    {
      icon: Zap,
      title: "Quick & Efficient",
      description:
        "Reduce waiting times and streamline your hospital visits with our efficient digital platform",
      color: "#e57373",
      gradient: "from-rose-400 to-red-500",
      bgColor:
        "bg-rose-50 hover:bg-gradient-to-br hover:from-rose-400 hover:to-red-500",
      textColor: "text-rose-500",
      shadowColor: "shadow-rose-200",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-cyan-100 rounded-full opacity-20 blur-3xl hidden lg:block" />
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 bg-green-100 rounded-full opacity-20 blur-3xl hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
            Making Healthcare{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Accessible
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Comprehensive digital solutions designed to streamline your
            healthcare experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl sm:rounded-3xl border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-transparent"
              >
                {/* Top Gradient Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transition-all duration-300 group-hover:h-1.5`}
                />

                <div className="p-6 sm:p-8 flex flex-col items-center text-center h-full">
                  {/* Icon Container */}
                  <div
                    className={`mb-4 sm:mb-6 p-4 sm:p-5 rounded-full ${feature.bgColor} ${feature.textColor} transition-all duration-400 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 ${feature.shadowColor} shadow-lg`}
                  >
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-snug">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            );
          })}
        </div>

        {/* Optional Bottom CTA */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base">
            Get Started Today
            <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
