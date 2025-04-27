import React, { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import HomeFAQs from './components/HomeFAQ';
import ContactForm from './components/ContactForm';
import MainFooter from './components/MainFooter';
import InfoSection from './components/InfoSection';
import FeaturesGrid from './components/FeaturesGrid';

const Home: React.FC = () => {
	const contactRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);
	const faqRef = useRef<HTMLDivElement>(null);

	const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	useEffect(() => {
		let lastScrollTop = 0;

		const handleScroll = () => {
			const hcf = document.querySelector(".hcf-profile") as HTMLElement;
			const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

			if (hcf) {
				if (scrollTop > lastScrollTop) {
					hcf.classList.add("hcf-profile-fixed");
				} else {
					hcf.classList.remove("hcf-profile-fixed");
				}
			}

			lastScrollTop = scrollTop;
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<main>
			<HeroSection
				scrollToSection={scrollToSection}
				featuresRef={faqRef}
				contactRef={contactRef}
				aboutRef={aboutRef}
			/>

			<section className="bg-blue-50 relative">
				<FeaturesGrid />
			</section>

			<section className="bg-white relative" ref={aboutRef}>
				<InfoSection />
			</section>

			<section className="bg-white relative" ref={faqRef}>
				<HomeFAQs />
			</section>

			<section className="bg-white relative" ref={contactRef}>
				<ContactForm />
			</section>

			<footer className="bg-gray-100">
				<MainFooter />
			</footer>
		</main>
	);
};

export default Home;
