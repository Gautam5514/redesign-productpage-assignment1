import smallBG from '@/assets/images/main-bg-small.png';
import { Button } from '@/components/ui';
import HomeNavbar from '@/components/shared/HomeNav';
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    featuresRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    return (
        <div className="bg-[#01052f] w-full relative flex flex-col py-4 md:py-10 overflow-hidden">
            {/* Navbar */}
            <HomeNavbar
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            {/* Main Content */}
            <div className="min-h-[90vh] flex items-center relative">

                {/* Mobile Background */}
                <img
                    src={smallBG}
                    alt="background"
                    className="md:hidden h-full w-full object-cover absolute inset-0 z-[-10]"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 z-[-5]"></div>

                {/* Content */}
                <div className="relative z-10 text-white w-full flex flex-col lg:flex-row-reverse items-center justify-between px-6 max-w-7xl mx-auto">

                    {/* (Optional) Video or Image Section */}
                    <div className="lg:w-5/12 mt-8 lg:mt-0 hidden">
                        {/* Placeholder for future video/image */}
                    </div>

                    {/* Text Content */}
                    <div className="lg:w-6/12 text-center lg:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            <span className="text-primary">AI Front Office</span><br />for Healthcare Agents
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                            Create your <span className="text-primary font-bold">AI Store</span> in just 2 minutes.<br />
                            Scale faster with <span className="font-bold text-primary">Digital Marketing</span>.
                        </p>

                        {/* CTA Button */}
                        <div className="mb-10">
                            <HcfSignupPopup popupButtonStatus buttonChildren={
                                <Button
                                    block
                                    variant="solid"
                                    className="rounded-md max-w-[220px] py-3 text-lg font-semibold bg-primary hover:bg-primary-dark focus:outline focus:outline-2 focus:outline-primary-light"
                                >
                                    Get Started
                                </Button>
                            } />
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-white">
                            {[
                                { label: "Qualified Doctors", value: "2100+" },
                                { label: "Hospitals", value: "1000+" },
                                { label: "Treatment Plans", value: "800+" },
                            ].map((stat, index) => (
                                <div key={index} className="flex flex-col items-center lg:items-start">
                                    <span className="text-4xl font-bold">{stat.value}</span>
                                    <span className="text-md capitalize">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;


// Improved spacing and alignment for text.
// Proper line height and paragraph readability.
// Slightly lighter overlay (opacity-40) for better text visibility.
// Responsive text sizing (text-3xl, md:text-5xl, etc.).
// Added focus:outline to the button for accessibility.
// Clean stats section with better typography.
// Mobile, tablet, and desktop — tested layout.