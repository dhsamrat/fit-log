import Image from "next/image";
import FooterLogo from '@/assets/logo.png'
const Footer = () => {
  return (
    <footer className="border-t border-[#1d1f22] bg-[#0F1115]">
      <div className="flex min-h-[86px] items-center justify-between px-5 md:px-10">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={FooterLogo} width={15} alt="Footer Image" ></Image>

          <div className="text-sm font-bold tracking-wide text-white">
            FITLOG
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-[#6B7280]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;