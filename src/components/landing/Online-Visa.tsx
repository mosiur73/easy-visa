"use client"

import Image from "next/image"
import img1 from "../../../public/images/banner2.jpeg"
import img2 from "../../../public/images/bimanbala.jpg"

export default function VisaPage() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Header */}
      <div className="text-center py-8">
        <h2 className="text-green-700 text-lg font-semibold">
          We are official OnlineEmiratesvisa.com
        </h2>
        <p className="text-gray-600">Apply now and enjoy fast approvals</p>
        
      </div>

      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16 lg:px-24 py-10 items-center">
        {/* Left Text */}
        <div>
          <h3 className="text-green-600 text-xl font-bold mb-4">
            Our Company Mission & Vision for Long Term
          </h3>
          <p className="text-gray-700 mb-4">
            The Dubai Express Visa service is best for those travelers who want
            to get an efficient visa processing services. Embark on your UAE
            adventure with ease through our secure and convenient online visa
            services. Whether you’re traveling for business or leisure, our
            efficient application process ensures quick approvals and a
            hassle-free experience. Skip the lines and apply for your UAE visa
            from the comfort of your home. Start your journey today and prepare
            to discover the wonders of the United Arab Emirates with confidence.
            Smart travel begins here!
          </p>
          <p className="text-gray-700">
            Experience a smooth and stress-free path to the United Arab Emirates
            with our streamlined UAE Visa Online service. Forget the long queues
            and complex procedures—our user-friendly platform lets you complete
            your application easily from home. With fast processing times and
            dependable approvals, you’ll be ready to embrace your UAE adventure
            in no time. Trust us to simplify your journey—apply online today and
            travel with peace of mind!
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[280px] md:h-[320px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={img1}
            alt="Emirates Plane"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16 lg:px-24 py-10 items-center">
        {/* Left Image */}
        <div className="relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={img2}
            alt="Emirates Crew"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Text */}
        <div>
          <h3 className="text-green-600 text-xl font-bold mb-4">
            Travel to Emirates with us!
          </h3>
          <p className="text-gray-700 mb-4">
            In situations where an applicant want to travel immediate due to any
            circumstances, like as medical emergencies or urgent business
            meeting, the Emergency Emirates Visa provides a quick services for
            travelers in need of urgent visa approval.
          </p>
          <p className="text-gray-700 mb-4">
            Apply your Emirates via with us and experience the fast visa
            approval like never before. At Emirates Visa Express, we understand
            the excitement of planning your trip. That’s why we always make sure
            the visa application process is fast for approvals, getting you one
            step closer to your journey. Further, Emirates Visa Express
            experienced & professional team is dedicated to providing you with
            expert guidance and support at every step of the way.
          </p>
          <p className="text-gray-900 font-semibold">
            Online Emirates Visa <br />
            <span className="text-gray-600 font-normal">
              Your trusted partner for fast and efficient UAE visa services.
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
