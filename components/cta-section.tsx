"use client"

import { QrCode, Download } from "lucide-react"

export default function CTASection() {
  return (
    <section className="w-full px-4 py-16 md:py-24" style={{ backgroundColor: "#2C6E80" }}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:gap-16 md:grid-cols-2 md:items-center">
          {/* Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Ready to book your next service?
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-white opacity-90">
              Download Convenz today and discover the easiest way to book trusted home services in your area.
            </p>

            <button
              className="px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold text-white text-base md:text-lg transition-smooth hover:shadow-lg w-fit"
              style={{ backgroundColor: "#3DD5A1", color: "#2C6E80" }}
            >
              <Download className="inline mr-2" size={20} />
              Download Now
            </button>
          </div>

          {/* QR Code */}
          <div className="flex items-center justify-center md:justify-end">
            <div className="flex flex-col items-center gap-6">
              <div className="w-48 h-48 rounded-lg border-4 border-white bg-white flex items-center justify-center">
                <QrCode size={80} style={{ color: "#3DD5A1" }} />
              </div>
              <p className="text-white text-center text-sm opacity-75">Scan to download the app</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
