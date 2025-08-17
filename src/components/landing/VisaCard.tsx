"use client";
import Image from "next/image";

import img1 from "../../../public/images/Airport1.jpg";
import img3 from "../../../public/images/Airport3.jpeg";

export default function VisaCard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Tagline */}
      <div className="text-center py-4">
        <p className="text-green-600 font-semibold tracking-wide">
          Fly to Emirates Now!
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          Start Your Journey with Ease
        </h1>
      </div>

      {/* Visa Services Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 px-4">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-red-200 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-red-400">
          <Image
            src={img1}
            alt="Tourist Visa"
            width={400}
            height={250}
            className="object-cover w-full h-40"
          />
          <div className="p-4 text-center">
            <h3 className="font-bold text-lg">Tourist Visa</h3>
            <p className="text-sm text-gray-600 mt-2">
              Ideal for those looking to explore the UAE’s top attractions.
            </p>
            <button className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-red-200 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-red-400">
          <Image
            src={img3}
            alt="Business Visa"
            width={400}
            height={250}
            className="object-cover w-full h-40"
          />
          <div className="p-4 text-center">
            <h3 className="font-bold text-lg">Business Visa</h3>
            <p className="text-sm text-gray-600 mt-2">
              Perfect for entrepreneurs and professionals attending events.
            </p>
            <button className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-red-200 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-red-400">
          <Image
            src={img1}
            alt="Family Visa"
            width={400}
            height={250}
            className="object-cover w-full h-40"
          />
          <div className="p-4 text-center">
            <h3 className="font-bold text-lg">Family Visa</h3>
            <p className="text-sm text-gray-600 mt-2">
              Designed for families planning a stay in the UAE.
            </p>
            <button className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-red-200 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-red-400">
          <Image
            src={img3}
            alt="Transit Visa"
            width={400}
            height={250}
            className="object-cover w-full h-40"
          />
          <div className="p-4 text-center">
            <h3 className="font-bold text-lg">Transit Visa</h3>
            <p className="text-sm text-gray-600 mt-2">
              Convenient for short stays or layovers in the UAE.
            </p>
            <button className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
