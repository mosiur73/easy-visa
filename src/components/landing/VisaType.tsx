"use client";

const VisaType: React.FC = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      <div className="container max-w-6xl mx-auto py-20 px-4">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Apply for a <span className="text-green-700 underline">VISA</span> with peace of mind
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Application in minutes - 24/7 help and support
          </p>
          <div className="h-1 bg-red-600 w-40 sm:w-60 md:w-80 mx-auto"></div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-xl p-8 flex-1 border border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
              Apply online <br /> anytime anywhere
            </h2>
            <div className="h-1 bg-red-500 w-24 sm:w-40 mx-auto mb-4"></div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              We have our own fantastic tools and systems for online application, so you can apply
              from the comfort of your home at any time. Our systems are fully compatible with any device, 
              so all you need is an internet connection and a device that can use a browser.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-xl p-8 flex-1 border border-gray-200">
            <h2 className="text-xl sm:text-2xl text-center font-bold mb-4">
              Enjoy our 24 hours <br /> online visa service
            </h2>
            <div className="h-1 bg-red-500 w-24 sm:w-40 mx-auto mb-4"></div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Our online visa service is fully automated to allow for the fastest response times. 
              Our system processes applications automatically on a 24/7 basis, 365 days a year 
              to ensure that your application for a visa is handled as soon as you submit it.
            </p>
          </div>

        </div>

        {/* Card 3 */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
            <h2 className="text-xl sm:text-2xl text-center font-bold mb-4">
              Our 24/7 customer <br /> support at any time
            </h2>
            <div className="h-1 bg-red-500 w-24 sm:w-40 mx-auto mb-4"></div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Our online customer support system is fully operational and is manned by professional 
              customer support staff that are available around the clock to ensure you have the best 
              experience possible with our service. We provide help and support with any issues you may have.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VisaType;
