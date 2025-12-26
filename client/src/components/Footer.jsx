import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div>
          <img src={logo} alt="64Routes Logo" className="w-20 mb-3" />
          <h2 className="text-2xl font-bold text-green-500">
            <span className="text-red-600">64</span>Routes
          </h2>
          <p className="mt-3 text-sm opacity-80">
            A nationwide B2C parcel management and delivery system covering all
            64 districts of Bangladesh with speed, transparency, and trust.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="footer-title">Company</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="link link-hover">About Us</Link></li>
            <li><Link to="/coverage" className="link link-hover">Coverage Area</Link></li>
            <li><Link to="/pricing" className="link link-hover">Pricing</Link></li>
            <li><Link to="/blog" className="link link-hover">Blog</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="footer-title">Services</h3>
          <ul className="space-y-2">
            <li>Parcel Booking</li>
            <li>Real-time Tracking</li>
            <li>Inter-District Delivery</li>
            <li>Agent-Based Delivery</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="footer-title">Support</h3>
          <p className="text-sm">📧 support@64routes.com</p>
          <p className="text-sm">📞 +880 1XXX-XXXXXX</p>
          <p className="text-sm mt-2">🇧🇩 Serving all 64 districts</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a aria-label="Twitter" className="hover:text-green-500">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
              </svg>
            </a>
            <a aria-label="YouTube" className="hover:text-green-500">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246..." />
              </svg>
            </a>
            <a aria-label="Facebook" className="hover:text-green-500">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5..." />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-content/10 text-center py-4 text-sm">
        © {new Date().getFullYear()} 64Routes. All rights reserved.
        <span className="mx-2">|</span>
        <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
        <span className="mx-2">|</span>
        <Link to="/terms" className="link link-hover">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Footer;
