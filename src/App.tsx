import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StorySection from '@/components/StorySection';
import MethodologySection from '@/components/MethodologySection';
import TalentSection from '@/components/TalentSection';
import SuccessSection from '@/components/SuccessSection';
import ActivitySection from '@/components/ActivitySection';
import BusinessSection from '@/components/BusinessSection';
import JoinSection from '@/components/JoinSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <Navbar />
      <Hero />
      <StorySection />
      <MethodologySection />
      <TalentSection />
      <SuccessSection />
      <ActivitySection />
      <BusinessSection />
      <JoinSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
