"use client";

import PortfolioHeader from "../../components/portfolio/PortfolioHeader";
import ProfileSection from "../../components/portfolio/ProfileSection";
import SkillsSection from "../../components/portfolio/SkillsSection";
import BannerSection from "../../components/portfolio/BannerSection";
import FooterSection from "../../components/portfolio/FooterSection";

export default function Portfolio() {
  return (
    <div className="bg-background-dark text-text-light font-mono antialiased min-h-screen selection:bg-primary selection:text-background-dark">
      <div className="flex flex-col min-h-screen">
        <PortfolioHeader />

        <main className="flex-1 scrollbar-thin">
          <div className="p-3 sm:p-4 md:p-6">
            <div className="max-w-7xl mx-auto w-full">
              <ProfileSection />
              <SkillsSection />
              <BannerSection />
            </div>
          </div>
        </main>

        <FooterSection />
      </div>

      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    </div>
  );
}
