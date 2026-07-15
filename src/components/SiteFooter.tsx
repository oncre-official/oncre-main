import { Link } from "@tanstack/react-router";
import { OnCreLogo } from "./OnCreLogo";
import complianceSvg from "../assets/compliance.svg";
import { Instagram, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative bg-[#060F2D] py-16 overflow-hidden">
      {/* Background illustration */}
      <div className="absolute left-0 bottom-0 top-0 w-1/3 min-w-[300px] pointer-events-none z-0">
        <img
          src={complianceSvg}
          alt=""
          className="w-full h-full object-cover object-left opacity-90"
        />
      </div>

      <div className="container-page relative z-10">
        <div className="bg-[#0B1221] rounded-[2rem] p-10 md:p-16 border border-white/5 shadow-2xl">
          <div className="mb-16">
            <div className="text-white mb-6">
              <OnCreLogo markClassName="text-white" />
            </div>
            {/* <p className="mb-8 max-w-sm text-sm text-white/70">
              Credit with confidence. Track what customers owe, and recover it when
              they don&rsquo;t pay.
            </p> */}
            {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight uppercase">
              <span className="bg-gradient-to-r from-[#2951F2] to-[#6870C6] text-transparent bg-clip-text">READY TO GET YOUR </span>
              <span className="bg-gradient-to-r from-[#B16A54] to-[#DB7C32] text-transparent bg-clip-text">MONEY BACK</span>
            </h2> */}
          </div>

          <div className="grid gap-12 md:grid-cols-3 mb-16">
            <div>
              <h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">
                Solutions
              </h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li><Link to="/solutions/tracking" className="hover:text-white transition-colors">Tracking &amp; Reminders</Link></li>
                <li><Link to="/solutions/recovery-business" className="hover:text-white transition-colors">Recovery for Business</Link></li>
                <li><Link to="/solutions/recovery-enterprise" className="hover:text-white transition-colors">Enterprise Recovery</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">
                Get in touch
              </h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li>contact@oncre.com</li>
                <li>+234 813 XXX XXXX</li>
                <li>Lagos, Nigeria</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-white/70">© {new Date().getFullYear()} OnCRE. All rights reserved.</p>
              <p className="text-xs text-white/50">NDPR-compliant · Built for Nigerian businesses</p>
            </div>

            <div className="flex items-center gap-4 rounded-full border border-white/20 px-5 py-2.5">
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <div className="w-[1px] h-4 bg-white/20"></div>

              {/* X / Twitter */}
              <a href="#" className="text-white hover:text-white/80 transition-colors flex items-center justify-center w-[18px] h-[18px]">
                <svg width="14" height="14" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor" />
                </svg>
              </a>
              <div className="w-[1px] h-4 bg-white/20"></div>

              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
              <div className="w-[1px] h-4 bg-white/20"></div>

              {/* TikTok */}
              <a href="#" className="text-white hover:text-white/80 transition-colors flex items-center justify-center w-[18px] h-[18px]">
                <svg width="15" height="15" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                </svg>
              </a>
              <div className="w-[1px] h-4 bg-white/20"></div>

              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
