import Navbar from "../components/organism/Navbar";
import HeroSection from "../components/organism/HeroSection";
import FeedsCourses from "../components/organism/FeedsCourses";
import NewsletterSubs from "../components/organism/NewsletterSubs";
import Footer from "../components/organism/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeedsCourses />
      <NewsletterSubs />
      <Footer />
    </>
  );
}
