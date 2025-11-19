'use client';

import styled from 'styled-components';
import { Container, SectionSubtitle } from '@/components/common/Container';
import {
  IconChartBar,
  IconRocket,
  IconTarget,
  IconCoin,
  IconWallet,
  IconChartLine,
  IconLink,
  IconDeviceIpadStar,
  IconSettings,
  IconWorld,
  IconHome,
  IconBuilding
} from '@tabler/icons-react';

const Section = styled.div`
  padding: 100px 0;
  position: relative;
  scroll-margin-top: 80px;

  /* Fixed background image */
  &::after {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    width: 50vw;
    height: 100vh;
    background-image: url('/images/hero/ai3.png');
    background-repeat: no-repeat;
    background-position: right top;
    background-size: contain;
    z-index: -1;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 60px 0;

    &::after {
      width: 60vw;
      opacity: 0.4;
      background-position: right center;
    }
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 1rem;

    .highlight {
      color: #3b82f6;
      position: relative;
      display: inline-block;

      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 3px;
        background: #3b82f6;
      }
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;

    h2 {
      font-size: 2rem;
    }
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 33px;
    width: 2px;
    height: 100%;
    background: white;
    border-left: 3px dashed #c3cfe8;
    z-index: 0;
  }
`;

const TimelineItem = styled.div<{ $index: number }>`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  position: relative;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease forwards;
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const Period = styled.div`
  min-width: 100px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #333;
  text-align: left;
  padding-left: 10px;
  flex-shrink: 0;
  height: fit-content;
  span {
    padding: 10px 0;
    background: white;
    text-align: left;
  }

  @media (max-width: 768px) {
    min-width: 70px;
    font-size: 0.75rem;
    padding-top: 1.25rem;
  }

  @media (max-width: 480px) {
    min-width: 50px;
    font-size: 0.7rem;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  z-index: 1;
`;

const IconCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  border: 1px solid rgba(59, 130, 246, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;

  svg {
    color: #3b82f6;
    width: 24px;
    height: 24px;
  }
`;

const Content = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.15);
    transform: translateY(-2px);
  }
`;

const PhaseNumber = styled.div`
  display: inline-block;
  background: #eff6ff;
  color: #3b82f6;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const NextPhase = styled.div`
  margin-top: 4rem;
  text-align: center;
  padding: 2.5rem 3rem;
  background: linear-gradient(
    135deg,
    rgba(171, 198, 230, 0.5) 0%,
    rgba(189, 217, 251, 0.64) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  h3 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #3fa1b0;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1.1rem;
    color: #40a4b3;
    margin: 0;
  }

  @media (max-width: 640px) {
    padding: 2rem;
    margin-top: 3rem;

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const roadmapPhases = [
  {
    period: 'Q1 2025',
    title: 'Presale',
    description:
      'Initial token sale for early supporters and ecosystem development',
    icon: IconChartBar
  },
  {
    period: 'Q1 2025',
    title: 'MVP Platform Launch',
    description: 'Launch minimum viable product with core features',
    icon: IconRocket
  },
  {
    period: 'Q2 2025',
    title: 'Rewards, Voting & Ranking',
    description:
      'Implement community-driven features for property evaluation (Off-chain)',
    icon: IconTarget
  },
  {
    period: 'Q2 2025',
    title: 'Public Sale',
    description: 'Open token sale to the public with expanded distribution',
    icon: IconCoin
  },
  {
    period: 'Q2 2025',
    title: 'Integrated Wallet',
    description: 'Built-in wallet functionality for seamless transactions',
    icon: IconWallet
  },
  {
    period: 'Q3 2025',
    title: 'DEX Listing',
    description: 'List MOJI token on decentralized exchanges',
    icon: IconChartLine
  },
  {
    period: 'Q3 2025',
    title: 'On-chain Systems',
    description: 'Migrate rewards, burning, and redeem systems to blockchain',
    icon: IconLink
  },
  {
    period: 'Q3 2025',
    title: 'Voting & Staking',
    description: 'Launch fully decentralized voting and staking mechanisms',
    icon: IconDeviceIpadStar
  },
  {
    period: 'Q4 2025',
    title: 'Feature Development',
    description:
      'Continuous platform enhancement and user experience improvements',
    icon: IconSettings
  },
  {
    period: 'Q4 2025',
    title: 'Official Launch',
    description: 'Global marketing campaign and worldwide platform rollout',
    icon: IconWorld
  },
  {
    period: 'Q1 2026',
    title: 'Smart Home Integration',
    description: 'Integrate IoT and smart home technology features',
    icon: IconHome
  },
  {
    period: 'Q2 2026',
    title: 'CEX Listing',
    description:
      'List on major centralized exchanges for broader accessibility',
    icon: IconBuilding
  }
];

export const Roadmap = () => {
  return (
    <Section id="roadmap">
      <Container>
        <Header>
          <h2>
            Company <span className="highlight">Timeline</span>
          </h2>
          <SectionSubtitle>
            Our strategic plan to revolutionize the real estate industry with
            blockchain technology
          </SectionSubtitle>
        </Header>

        <Timeline>
          {roadmapPhases.map((phase, index) => {
            const IconComponent = phase.icon;
            return (
              <TimelineItem key={index} $index={index}>
                <Period>
                  <span>{phase.period}</span>
                  <IconWrapper>
                    <IconCircle>
                      <IconComponent stroke={2} />
                    </IconCircle>
                  </IconWrapper>
                </Period>
                <Content>
                  <PhaseNumber>Phase {index + 1}</PhaseNumber>
                  <Title>{phase.title}</Title>
                  <Description>{phase.description}</Description>
                </Content>
              </TimelineItem>
            );
          })}
        </Timeline>

        <NextPhase>
          <h3>Next Phase</h3>
          <p>Moji Crowdfunding Launch</p>
        </NextPhase>
      </Container>
    </Section>
  );
};
