"use client"

import type React from "react"

import { Search, Users, Calendar, Smartphone } from "lucide-react"

interface Step {
  title: string
  description: string
  icon: React.ReactNode
  number: number
}

const steps: Step[] = [
  {
    number: 1,
    title: "Choose Your Service",
    description: "Select from plumbing, electrical, cleaning, carpentry, pet care, and more.",
    icon: <Search size={32} />,
  },
  {
    number: 2,
    title: "Select a Vendor",
    description: "Browse nearby professionals with verified ratings and reviews.",
    icon: <Users size={32} />,
  },
  {
    number: 3,
    title: "Book Instantly",
    description: "Pick your preferred date and time—confirmation is instant.",
    icon: <Calendar size={32} />,
  },
  {
    number: 4,
    title: "Track Everything",
    description: "Monitor your service in real-time through the app.",
    icon: <Smartphone size={32} />,
  },
]

export default function HowItWorks() {
  return (
    <section className="w-full px-4 py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-pretty" style={{ color: "#2C6E80" }}>
            How It Works
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" style={{ color: "#666666" }}>
            Four simple steps to get your home service sorted
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {index < steps.length - 1 && (
                <>
                  {/* Desktop horizontal line */}
                  <div
                    className="hidden lg:block absolute top-8 -right-4 w-[calc(100%+32px)] h-1 pointer-events-none"
                    style={{
                      backgroundColor: "#3DD5A1",
                      opacity: 0.3,
                    }}
                  />
                  {/* Mobile vertical connector indicator */}
                  <div
                    className="lg:hidden absolute -bottom-6 left-8 w-0.5 h-6"
                    style={{ backgroundColor: "#3DD5A1" }}
                  />
                </>
              )}

              <div className="relative flex flex-col h-full">
                {/* Step indicator with enhanced styling */}
                <div className="relative mb-6 flex items-start gap-4">
                  <div
                    className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full text-white font-bold text-xl shadow-md transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "#2C6E80" }}
                  >
                    {step.number}
                  </div>

                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50 transition-colors duration-300 group-hover:bg-accent/10"
                    style={{ color: "#3DD5A1" }}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Content section with improved typography */}
                <div className="flex-grow">
                  <h3
                    className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-accent"
                    style={{ color: "#2C6E80" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: "#666666" }}>
                    {step.description}
                  </p>
                </div>

                <div
                  className="mt-6 h-1 w-8 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "#3DD5A1" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
