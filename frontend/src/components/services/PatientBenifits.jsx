const PatientBenifits = () => {
  return (
    <>
      {/* Benefits Section */}
      <div className="container mx-auto px-4 max-w-6xl py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
          Benefits for Patients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              60%
            </div>
            <h3 className="text-xl font-semibold mb-3">Time Saved</h3>
            <p className="text-gray-600">
              Reduce waiting time at hospitals with pre-booked appointments
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              24/7
            </div>
            <h3 className="text-xl font-semibold mb-3">Availability</h3>
            <p className="text-gray-600">
              Book appointments and check medicine stock anytime, anywhere
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              100%
            </div>
            <h3 className="text-xl font-semibold mb-3">Free Service</h3>
            <p className="text-gray-600">
              No charges for any services - completely free for all citizens
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientBenifits;
