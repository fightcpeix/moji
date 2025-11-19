'use client';

import styled from 'styled-components';
import {
  Container,
  SectionTitle,
  SectionSubtitle
} from '@/components/common/Container';
import { IconGift, IconDiamond, IconDeviceIpadStar } from '@tabler/icons-react';

const Section = styled.div`
  padding: 100px 0;
  background: linear-gradient(180deg, #f8fafb 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 60px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FeatureCard = styled.div<{ $index: number }>`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid #e5e7eb;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: ${(props) => props.$index * 0.15}s;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #5987c2 0%, #93b2da 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(89, 135, 194, 0.12);
    border-color: #93b2da;

    &::before {
      transform: scaleX(1);
    }

    .icon-wrapper {
      transform: scale(1.1) rotate(5deg);
    }
  }

  .icon-wrapper {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #cdd4d6 0%, #93b2da 100%);
    color: white;
    transition: all 0.3s ease;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: #4e5a6c;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 640px) {
    padding: 2rem;

    .icon-wrapper {
      width: 60px;
      height: 60px;
    }

    h3 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
`;

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 0.5rem 0;
    position: relative;
    font-size: 0.95rem;
    color: #6b7280;
    line-height: 1.6;
  }
`;

const features = [
  {
    icon: IconDeviceIpadStar,
    title: 'Voting System',
    description:
      'Users vote for interesting property listings using MOJI Tokens.',
    details: [
      '1 MOJI = 1 Vote',
      'Distributed to Staking Pool',
      'Returns to Reward Pool',
      'Platform development allocation'
    ]
  },
  {
    icon: IconGift,
    title: 'Reward System',
    description: 'Earn MOJI Tokens for posting verified real estate listings.',
    details: [
      'Rewards for verified listings',
      'Incentivizes quality content',
      'Automated distribution',
      'Transparent tracking'
    ]
  },
  {
    icon: IconDiamond,
    title: 'Staking System',
    description:
      'Stake MOJI Tokens to earn additional rewards and support the ecosystem.',
    details: [
      'Long-term engagement rewards',
      'Token stability promotion',
      'Flexible staking periods',
      'Compound earnings'
    ]
  }
];

export const BlockchainSection = () => {
  return (
    <Section>
      <Container>
        <SectionTitle data-aos="fade-down">
          Blockchain & Smart Contracts
        </SectionTitle>
        <SectionSubtitle data-aos="fade-up" data-aos-delay="100">
          Moji House utilizes blockchain technology to record and automate all
          transactions securely and transparently through Smart Contracts
        </SectionSubtitle>

        <FeaturesGrid>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FeatureCard
                key={index}
                $index={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col justify-center text-center items-center">
                  <div className="icon-wrapper">
                    <Icon size={40} stroke={2} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
                <DetailList>
                  {feature.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </DetailList>
              </FeatureCard>
            );
          })}
        </FeaturesGrid>
      </Container>
    </Section>
  );
};
