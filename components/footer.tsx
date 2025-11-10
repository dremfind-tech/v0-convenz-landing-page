"use client"

export default function Footer() {
  return (
    <footer className="w-full px-4 py-12 md:py-16 bg-white border-t" style={{ borderColor: "#E8E8E8" }}>
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold" style={{ color: "#2C6E80" }}>
              Convenz
            </h3>
            <p className="text-sm" style={{ color: "#4A4A4A" }}>
              Your trusted home services platform.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold" style={{ color: "#2C6E80" }}>
              Product
            </h4>
            <a href="#" className="text-sm transition-smooth hover:opacity-60" style={{ color: "#4A4A4A" }}>
              Features
            </a>
            <a href="#" className="text-sm transition-smooth hover:opacity-60" style={{ color: "#4A4A4A" }}>
              Pricing
            </a>
            <a href="#" className="text-sm transition-smooth hover:opacity-60" style={{ color: "#4A4A4A" }}>
              Download
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold" style={{ color: "#2C6E80" }}>
              Company
            </h4>
            <a href="#" className="text-sm transition-smooth hover:opacity-60" style={{ color: "#4A4A4A" }}>
              About Us
            </a>
            <a href="#" className="text-sm transition-smooth hover:opacity-60" style={{ color: "#4A4A4A" }}>
              Blog
            </a>
            <a href="#" className="text-sm transition-smooth hover:opacity-60" style={{ color: "#4A4A4A" }}>
              Careers
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold" style={{ color: "#2C6E80" }}>
              Legal
            </h4>
            <a href="#" className="text-sm transition-smooth hover:opacity-60" style={{ color: "#4A4A4A" }}>
              Privacy Policy
            </a>
            <a href="#" className="text-sm transition-smooth hover:opacity-60" style={{ color: "#4A4A4A" }}>
              Terms of Service
            </a>
            <a href="#" className="text-sm transition-smooth hover:opacity-60" style={{ color: "#4A4A4A" }}>
              Contact
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div
          className="border-t pt-8 flex flex-col md:flex-row md:items-center md:justify-between"
          style={{ borderColor: "#E8E8E8" }}
        >
          <p className="text-sm" style={{ color: "#4A4A4A" }}>
            © 2025 Convenz. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm transition-smooth hover:opacity-60" style={{ color: "#4A4A4A" }}>
              Twitter
            </a>
            <a href="#" className="text-sm transition-smooth hover:opacity-60" style={{ color: "#4A4A4A" }}>
              LinkedIn
            </a>
            <a href="#" className="text-sm transition-smooth hover:opacity-60" style={{ color: "#4A4A4A" }}>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
