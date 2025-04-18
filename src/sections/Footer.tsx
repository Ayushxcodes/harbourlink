import logoImage from '@/assets/images/logo.png'
import Image from 'next/image';

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return( <section id="Footer" className='py-16'>
        <div className="container">
            <div className='flex flex-col md:flex-row items-center md:justify-between gap-6'>
                <div>
                    <Image src={logoImage} className='h-20 w-auto' alt='harbour_link'/>
                </div>
                <div>
                    <nav className='flex gap-6'>
                        {footerLinks.map((link) => (
                            <a key={link.label} href={link.href} className='text-black/50'>{link.label}</a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    </section>
)}
