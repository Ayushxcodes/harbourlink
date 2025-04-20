import madeImage from '@/assets/images/imagelogo.jpg';
import Image from 'next/image';

const footerLinks = [
  { href: "#", label: "+919958278620" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
  { href: "#", label: "info@harborlinkglobal.in" },
];

export default function Footer() {
  return (
    <footer id="Footer" className="bg-gradient-to-r from-sky-300 to-sky-800 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Image
              src={madeImage}
              alt="Harbour Link"
              width={180} // Increased width
              height={60} // Adjusted height for aspect ratio
              className="w-auto h-auto"
            />
          </div>

          {/* Links and Address Section */}
          <div className="text-center md:text-left max-w-2xl space-y-4">
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center md:justify-start gap-6 mb-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Address 1 */}
            <p className="mb-2 text-lg">
              <strong className='text-yellow-400'>Address 1:</strong> 3rd Floor, Survey No 1051, Waltair Main Road, D. No.12-1-16,
              Plot No.49, opposite HDFC Bank, Visakhapatnam, Andhra Pradesh 530002
            </p>

            {/* Address 2 */}
            <p className="text-lg">
              <strong className="text-yellow-400">Address 2:</strong> 3rd Floor, 44, Regal Building, 69,
              Connaught Cir, Hanuman Road Area, Connaught Place, New Delhi, Delhi 110001
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t-2 border-white pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Harbour Link. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
