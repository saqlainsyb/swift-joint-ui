import HeroSection from "@/components/application/HeroSection";
import InfoSection from "@/components/application/InfoSection";
import DownloadCTA from "@/components/application/DownloadCTA";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Application - Swift Joint',
}

export default function ApplicationPage() {
  return (
    <main>
      <HeroSection />
      <InfoSection />
      <DownloadCTA />
    </main>
  );
}
