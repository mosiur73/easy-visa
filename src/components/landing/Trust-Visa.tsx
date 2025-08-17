"use client"

import Image from "next/image"
import { FaClock, FaUsers } from "react-icons/fa"
import img from "../../../public/images/passport.jpg"

export default function TrustVisa() {
  return (
    <div className="max-w-7xl mx-auto bg-[#f8f9fa] py-12 px-6 md:px-16 lg:px-24">
     
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <p className="text-sm text-yellow-600 font-semibold uppercase tracking-wider mb-2">
            About Getestway
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We Are a Trusted Visa <br /> and Immigration Agent
          </h1>
          <p className="text-gray-600 mb-6">
            Maecenas dictum vivamus porta. Phasellus auctor risus vel enim
            consectetur facilisis. Aliquam facilisis ligula massa. Vestibulum
            quis felis in lacus venenatis bibendum. Sed bibendum mauris mauris,
            malesuada semper ex consectetur ut.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-yellow-500 text-2xl">
                <FaClock />
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Real Time Status</h3>
                <p className="text-gray-500 text-sm">Sol ut urna nec eu facilisis</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-yellow-500 text-2xl">
                <FaUsers />
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Experienced Team</h3>
                <p className="text-gray-500 text-sm">Sol ut urna nec eu facilisis</p>
              </div>
            </div>
          </div>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition">
            About Us
          </button>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center md:justify-end">
          {/* Main Image */}
          <div className="relative w-[350px] h-[250px] md:w-[400px] md:h-[280px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://i.ibb.co.com/JWJvkTqH/images.jpg"
              alt="Smiling person with passport"
              fill
              className="object-cover"
            />
          </div>

          {/* Badge */}
          <div className="absolute -top-7  bg-blue-900 text-white px-5 py-3 rounded-md shadow-md">
            <p className="text-xl font-bold">25<sup>+</sup></p>
            <p className="text-sm">Years of Experience</p>
          </div>

          {/* Overlay Small Image */}
          <div className="absolute -bottom-8 -left-2 w-[160px] h-[100px] rounded-lg overflow-hidden shadow-md border-4 border-white">
            <Image
              src={img}
              alt="Passport"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    
    </div>
  )
}
