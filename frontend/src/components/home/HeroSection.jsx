import React, { useState, useEffect } from "react";
import {
  MapPin,
  Play,
  TrendingUp,
  CheckCircle,
  Star,
  Users,
  Building2,
  Clock,
  Shield,
} from "lucide-react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Patients Served",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Building2,
      value: "500+",
      label: "Hospitals",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Support",
      color: "from-purple-400 to-pink-500",
    },
  ];

  const features = [
    { icon: CheckCircle, text: "Instant Booking" },
    { icon: Shield, text: "Secure & Private" },
    { icon: Star, text: "Verified Hospitals" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${
                5 + Math.random() * 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/15 transition-all animate-fadeIn">
              <CheckCircle className="text-green-400" size={18} />
              <span className="text-sm font-medium">
                Digital India Initiative
              </span>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-slideUp">
              <span className="block mb-2">Touch My</span>
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 bg-clip-text text-transparent">
                Hospital
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-light text-blue-100 animate-slideUp animation-delay-200">
              Digital Healthcare Platform for Government Hospitals
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-blue-50/90 leading-relaxed max-w-xl animate-slideUp animation-delay-400">
              Save time and avoid unnecessary queues by booking OPD appointments
              and checking medicine availability through our digital platform.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 animate-slideUp animation-delay-600">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/15 transition-all"
                >
                  <feature.icon size={16} className="text-cyan-300" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slideUp animation-delay-800">
              <a
                href="/hospitals"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <MapPin
                  className="relative z-10 group-hover:scale-110 transition-transform"
                  size={24}
                />
                <span className="relative z-10">Find Hospitals</span>
              </a>

              <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-2xl font-semibold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 hover:-translate-y-1 transition-all duration-300">
                <div className="p-1 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                  <Play size={16} fill="currentColor" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 animate-slideUp animation-delay-1000">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={`inline-flex p-2 bg-gradient-to-br ${stat.color} rounded-lg mb-2 group-hover:scale-110 transition-transform`}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-blue-100">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block animate-fadeIn animation-delay-400">
            {/* Main Card */}
            <div className="relative">
              {/* Floating Card 1 */}
              <div className="absolute -top-8 -left-8 w-64 p-6 bg-white rounded-3xl shadow-2xl animate-float z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full mb-2 w-3/4" />
                    <div className="h-2 bg-gray-200 rounded-full w-1/2" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-100 rounded-full" />
                  <div className="h-2 bg-gray-100 rounded-full w-5/6" />
                </div>
              </div>

              {/* Main Image Container */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400/30 to-purple-400/30 flex items-center justify-center overflow-hidden">
                  <div className="text-center space-y-4 animate-pulse-slow">
                    <div className="text-6xl">🏥</div>
                    <div className="text-white">
                      <p className="text-2xl font-bold mb-2">Healthcare at</p>
                      <p className="text-xl font-light">Your Fingertips</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -bottom-8 -right-8 w-64 p-6 bg-white rounded-3xl shadow-2xl animate-float animation-delay-2000 z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-2 border-white" />
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full border-2 border-white" />
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full border-2 border-white" />
                  </div>
                  <div className="text-sm font-semibold text-gray-700">
                    +50K Users
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  Trusted by thousands
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 -right-4 w-24 h-24 bg-cyan-400 rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="absolute -bottom-4 left-1/4 w-32 h-32 bg-purple-400 rounded-full blur-3xl opacity-30 animate-pulse animation-delay-1000" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
