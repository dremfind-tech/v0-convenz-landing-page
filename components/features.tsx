"use client"

import type React from "react"

import { MapPin, Zap, CheckCircle, DollarSign } from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: "Nearby Vendors",
    description: "Find verified professionals within 5–20 km of your location instantly.",
    icon: <MapPin size={32} />,
  },
  {
    title: "Instant Booking",
    description: "Book services in seconds without lengthy forms or waiting lists.",
    icon: <Zap size={32} />,
  },
  {
    title: "Verified Professionals",
    description: "All vendors are thoroughly vetted and rated by the community.",
    icon: <CheckCircle size={32} />,
  },
  {
    title: "Transparent Pricing",
    description: "No hidden charges. See all costs upfront before you book.",
    icon: <DollarSign size={32} />,
  },
]

export default function Features() {
  return (
    <section className="w-full px-4 py-16 md:py-24" style={{ backgroundColor: "#F8F8F8" }}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#2C6E80" }}>
            Why Choose Convenz
          </h2>
          <p className="mt-4 text-lg" style={{ color: "#4A4A4A" }}>
            The simplest, most trusted way to book home services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-xl shadow-sm transition-smooth hover:shadow-md bg-white">
              <div className="mb-4" style={{ color: "#3DD5A1" }}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#2C6E80" }}>
                {feature.title}
              </h3>
              <p className="leading-relaxed" style={{ color: "#4A4A4A" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
