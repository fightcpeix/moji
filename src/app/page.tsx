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

export default function Home() {
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
