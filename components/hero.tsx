"use client"

import { Download, QrCode } from "lucide-react"

export default function Hero() {
  return (
    <section className="w-full bg-white px-4 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:gap-16 md:grid-cols-2 md:items-center">
          {/* Content */}
          <div className="flex flex-col gap-6 md:gap-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" style={{ color: "#2C6E80" }}>
              Your trusted way to book local home services, instantly.
            </h1>

            <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#4A4A4A" }}>
              Connect with verified professionals for plumbing, electrical work, cleaning, and more—all within 5–20 km
              of your location.
            </p>

            {/* CTA Area */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <button
                className="px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold text-white text-base md:text-lg transition-smooth hover:shadow-lg"
                style={{ backgroundColor: "#3DD5A1" }}
              >
                <Download className="inline mr-2" size={20} />
                Download App
              </button>

              {/* QR Code Placeholder */}
              <div
                className="flex items-center justify-center w-32 h-32 rounded-lg border-2 border-gray-300 bg-gray-50"
                style={{ borderColor: "#E8E8E8" }}
              >
                <QrCode size={40} style={{ color: "#3DD5A1" }} />
              </div>
            </div>
          </div>

          {/* Right side - Visual Element */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              {/* Geometric accent shapes */}
              <div className="absolute inset-0 rounded-3xl opacity-10" style={{ backgroundColor: "#3DD5A1" }} />
              <div
                className="absolute top-12 right-12 w-32 h-32 rounded-full opacity-5"
                style={{ backgroundColor: "#2C6E80" }}
              />
              <div
                className="absolute bottom-12 left-12 w-24 h-24 rounded-full opacity-5"
                style={{ backgroundColor: "#3DD5A1" }}
              />

              {/* Phone mockup placeholder */}
              <div
                className="absolute inset-8 rounded-3xl border-8 border-gray-300 bg-gray-50"
                style={{ borderColor: "#2C6E80", opacity: 0.3 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
