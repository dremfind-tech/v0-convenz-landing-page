"use client"

import type React from "react"

import { Wrench, Zap, Heart, Sparkles, Hammer, MoreHorizontal } from "lucide-react"

interface Service {
  name: string
  icon: React.ReactNode
}

const services: Service[] = [
  { name: "Plumbing", icon: <Wrench size={40} /> },
  { name: "Electrician", icon: <Zap size={40} /> },
  { name: "Pet Care", icon: <Heart size={40} /> },
  { name: "Cleaning", icon: <Sparkles size={40} /> },
  { name: "Carpentry", icon: <Hammer size={40} /> },
  { name: "More Services", icon: <MoreHorizontal size={40} /> },
]

export default function ServicesGrid() {
  return (
    <section className="w-full px-4 py-16 md:py-24" style={{ backgroundColor: "#F8F8F8" }}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#2C6E80" }}>
            Services We Offer
          </h2>
          <p className="mt-4 text-lg" style={{ color: "#4A4A4A" }}>
            Everything you need to keep your home running smoothly.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-8 rounded-xl bg-white shadow-sm transition-smooth hover:shadow-md hover:scale-105 cursor-pointer"
            >
              <div className="mb-4" style={{ color: "#3DD5A1" }}>
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-center" style={{ color: "#2C6E80" }}>
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
