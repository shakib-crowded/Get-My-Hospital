import React from "react";
import { Globe, Shield, Clock, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Globe,
      title: "Accessibility",
      description:
        "Making healthcare services accessible to everyone, everywhere",
    },
    {
      icon: Shield,
      title: "Transparency",
      description:
        "Clear and open information about hospital services and availability",
    },
    {
      icon: Clock,
      title: "Efficiency",
      description: "Reducing waiting times and optimizing healthcare delivery",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working together with government hospitals to improve services",
    },
  ];

  const team = [
    {
      name: "Digital India Initiative",
      role: "Government Program",
      description: "Part of the national digital transformation movement",
    },
    {
      name: "Ministry of Health",
      role: "Implementation Partner",
      description: "Ensuring healthcare standards and compliance",
    },
    {
      name: "State Governments",
      role: "Regional Partners",
      description: "Local implementation and hospital coordination",
    },
  ];

  const stats = [
    { value: "60%", label: "Reduction in Waiting Time" },
    { value: "500+", label: "Government Hospitals" },
    { value: "1M+", label: "Patients Served Monthly" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6">
            About Touch My Hospital
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-center opacity-90 max-w-3xl mx-auto leading-relaxed">
            A Digital India initiative transforming government healthcare
            through technology, transparency, and patient-centric services.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
              Our Mission
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
              To revolutionize government healthcare services by leveraging
              digital technology to provide real-time information, reduce
              waiting times, and enhance patient experience.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              We believe that every citizen deserves access to efficient and
              transparent healthcare services, and we're committed to making
              this a reality through innovative digital solutions.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://img.freepik.com/free-photo/medical-banner-with-doctor-working-laptop_23-2149611211.jpg"
              alt="Healthcare Mission"
              className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={40} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Our Partners
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-600 mb-8 md:mb-12">
          Collaborative effort for better healthcare
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-blue-600 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Making a Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4">
                  {stat.value}
                </p>
                <p className="text-lg md:text-xl opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
