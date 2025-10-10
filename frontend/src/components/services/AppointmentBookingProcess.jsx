import { Link } from "react-router-dom";

const AppointmentBookingProcess = ({ bookingSteps }) => {
  return (
    <>
      {/* Booking Process */}
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How to Book an Appointment
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
            Simple steps to secure your OPD slot
          </p>

          {/* Stepper */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {bookingSteps.map((step, index) => (
              <div key={step.label} className="text-center">
                <div className="relative mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    {step.icon}
                  </div>
                  {index < bookingSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-1/2 w-full h-0.5 bg-blue-200 -z-10"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.label}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Book Your Appointment?
              </h3>
              <p className="text-gray-600 mb-6">
                Join thousands of patients who are saving time and getting
                better healthcare services through our platform.
              </p>
              <Link
                to="/hospitals"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
                  />
                </svg>
                Find Hospitals Now
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">
                Get Real-time Updates
              </h4>
              <p className="text-gray-600">
                Receive instant notifications about your appointment status,
                medicine availability, and important healthcare updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentBookingProcess;
