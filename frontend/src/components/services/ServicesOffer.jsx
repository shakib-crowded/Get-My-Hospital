const ServicesOffer = ({ services }) => {
  return (
    <>
      {/* Services Overview */}
      <div className="container mx-auto px-4 max-w-6xl py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What We Offer
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          Transforming your healthcare experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
            >
              <div className="p-6 md:p-8 text-center">
                <div className="text-blue-600 mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="text-left space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesOffer;
