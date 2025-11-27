'use client';

import Navbar from '@/components/common/Navbar';
import { Hero } from '@/components/home/Hero';
import { ProblemSolution } from '@/components/home/ProblemSolution';
import { BlockchainSection } from '@/components/home/BlockchainSection';
import { Tokenomics } from '@/components/home/Tokenomics';
import { Roadmap } from '@/components/home/Roadmap';
import { Team } from '@/components/home/Team';
import { Fundraising } from '@/components/home/Fundraising';
import { Conclusion } from '@/components/home/Conclusion';
import { Footer } from '@/components/common/Footer';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Handle hash navigation when coming from another page
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const offsetTop =
            element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <BlockchainSection />
        <Tokenomics />
        <Roadmap />
        <Team />
        <Fundraising />
        <Conclusion />
        <Footer />
      </main>
    </>
  );
}
