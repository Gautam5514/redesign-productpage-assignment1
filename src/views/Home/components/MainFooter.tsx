import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface LinkItem {
    text: string;
    path: string;
}

const links: LinkItem[] = [
    { text: 'Privacy Policy', path: '/privacy-policy' },
    { text: 'Terms of Service', path: '/terms-of-service' },
    { text: 'Pricing Policy', path: '/pricing-policy' },
    { text: 'Editor Policy', path: '/editor-policy' },
];

const MainFooter: React.FC = () => {
    return (
        <footer className="border-t border-gray-200 p-4">
            <div className="w-full flex flex-col sm:flex-row items-center justify-between mx-auto px-4 sm:px-12">
                {/* Copyright */}
                <h1 className="text-sm text-black text-center sm:text-left w-full sm:w-auto">
                    ©{new Date().getFullYear()} gogetwell.ai
                </h1>

                {/* Footer Links */}
                <ul className="mt-4 sm:mt-0 flex gap-x-3 flex-wrap gap-y-3 justify-center sm:justify-start mx-auto">
                    {links.map((item, i) => (
                        <li
                            key={i}
                            className="text-black hover:underline hover:text-blue-500 text-xs sm:text-sm text-center"
                        >
                            <Link to={item.path}>{item.text}</Link>
                        </li>
                    ))}
                </ul>

                {/* Social Media Icons */}
                <div className="items-center gap-2 md:gap-8 hidden sm:flex mt-4 sm:mt-0">
                    <Link
                        to="https://x.com/gogetwellai"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter size={25} className="text-primary" />
                    </Link>
                    <Link
                        to="https://www.linkedin.com/company/gogetwellai/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn size={25} className="text-primary" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;
