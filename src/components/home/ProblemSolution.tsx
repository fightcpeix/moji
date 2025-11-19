'use client';

import styled from 'styled-components';
import { Container, SectionTitle } from '@/components/common/Container';
import {
  IconCircle,
  IconCircleCheck,
  IconCircleCheckFilled
} from '@tabler/icons-react';

const Section = styled.div`
  padding: 100px 0;
  position: relative;
  scroll-margin-top: 80px;
  overflow: hidden;
  background: #eff3f8;

  /* Dot pattern - Left side */
  &::before {
    content: '';
    position: absolute;
    left: 5%;
    top: 35%;
    width: 120px;
    height: 120px;
    background-image: radial-gradient(circle, #a8c5e2 2px, transparent 2px);
    background-size: 15px 15px;
    opacity: 0.4;
    animation: floatLeftDots 8s ease-in-out infinite;
    z-index: 0;

    @media (max-width: 968px) {
      left: 2%;
      width: 80px;
      height: 80px;
      background-size: 12px 12px;
    }
  }

  /* Dot pattern - Right side */
  &::after {
    content: '';
    position: absolute;
    right: 5%;
    top: 45%;
    width: 150px;
    height: 150px;
    background-image: radial-gradient(circle, #a8c5e2 2px, transparent 2px);
    background-size: 15px 15px;
    opacity: 0.4;
    animation: floatRightDots 10s ease-in-out infinite;
    z-index: 0;

    @media (max-width: 968px) {
      right: 2%;
      width: 100px;
      height: 100px;
      background-size: 12px 12px;
    }
  }

  @keyframes floatLeftDots {
    0%,
    100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(-10px, -15px);
    }
  }

  @keyframes floatRightDots {
    0%,
    100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(10px, 15px);
    }
  }

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  left: 0;
  bottom: -40px;
  width: 50%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  background: url('/images/robot-hand.webp') no-repeat right bottom;
  background-size: contain;
  transform: scaleX(-1);
  z-index: 0;
  pointer-events: none;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-top: 60px;
  position: relative;
  z-index: 1;

  /* Connecting dots between columns */
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    width: 8px;
    height: 80px;
    background-image: linear-gradient(to bottom, #5987c2 8px, transparent 8px);
    background-size: 8px 20px;
    opacity: 0.3;
    animation: pulseConnector 3s ease-in-out infinite;

    @media (max-width: 968px) {
      display: none;
    }
  }

  @keyframes pulseConnector {
    0%,
    100% {
      opacity: 0.3;
      transform: translateX(-50%) scale(1);
    }
    50% {
      opacity: 0.6;
      transform: translateX(-50%) scale(1.1);
    }
  }

  @keyframes rotateShape {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const Column = styled.div`
  position: relative;
  z-index: 2;

  @keyframes fadeInAccent {
    to {
      opacity: 0.5;
    }
  }
`;

const ColumnTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  .icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.problems {
    color: #6b7280;

    .icon {
      background: #f5f7f9;
      color: #929498;
    }
  }

  &.solutions {
    color: #5987c2;

    .icon {
      background: linear-gradient(135deg, #cdd4d6 0%, #488ee8 100%);
      color: white;
    }
  }

  @media (max-width: 640px) {
    font-size: 1.5rem;

    .icon {
      width: 40px;
      height: 40px;
    }
  }
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li<{ $index: number }>`
  padding: 1.5rem;
  margin-bottom: 1rem;
  background: #ffffff90;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 12px;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.5s ease forwards;
  animation-delay: ${(props) => props.$index * 0.1}s;
  position: relative;
  overflow: hidden;

  /* Corner accent dot */
  &::after {
    content: '';
    position: absolute;
    top: 12px;
    right: 12px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &.problem {
    &::after {
      background: #6b7280;
    }

    &:hover {
      border-color: #cdd4d6;
      transform: translateX(8px);
      box-shadow: 0 4px 12px rgba(107, 114, 128, 0.08);

      &::before {
        left: 100%;
      }

      &::after {
        opacity: 0.4;
      }
    }
  }

  &.solution {
    &::after {
      background: #5987c2;
    }

    &:hover {
      border-color: #93b2da;
      transform: translateX(8px);
      box-shadow: 0 4px 12px rgba(89, 135, 194, 0.15);

      &::before {
        left: 100%;
      }

      &::after {
        opacity: 0.6;
      }
    }
  }

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .item-icon {
    display: inline-flex;
    margin-right: 0.75rem;
    vertical-align: middle;
  }

  .item-text {
    font-size: 1rem;
    line-height: 1.7;
    color: #1a1a1a;
  }

  @media (max-width: 640px) {
    padding: 1rem;

    .item-text {
      font-size: 0.95rem;
    }
  }
`;

const problems = [
  'Lack of transparency in credibility ranking systems',
  'High fees and complex processes in international transactions',
  'Difficulty for sellers to build trust and attract buyers',
  'Risk of fraud due to unverified property sources',
  'Cryptocurrency perceived as intangible and volatile',
  'Manual handling of all transaction steps causing inefficiency'
];

const solutions = [
  'Blockchain records for transparent and traceable transactions',
  'Community-driven voting system via Smart Contracts',
  'Reward mechanism generating income beyond commissions',
  'Verified user roles: Property Owners, Agencies, and Customers',
  'Reduced international fees using blockchain Smart Contracts',
  'Real estate-backed cryptocurrency bridging tangible and digital value',
  'NFTs for secure rental agreement records',
  'AI systems for automated inquiries and scheduling',
  'Virtual property tours enabling cross-border exploration'
];

export const ProblemSolution = () => {
  return (
    <Section id="about">
      <BackgroundImage />
      <Container>
        <SectionTitle data-aos="fade-down">
          Challenges & Innovations
        </SectionTitle>
        <ContentGrid>
          <Column data-aos="fade-right" data-aos-delay="100">
            <ColumnTitle className="problems">The Problems</ColumnTitle>
            <ItemList>
              {problems.map((problem, index) => (
                <Item key={index} $index={index} className="problem">
                  <span className="item-icon">
                    <IconCircle size={10} color="#6b7280" />
                  </span>
                  <span className="item-text">{problem}</span>
                </Item>
              ))}
            </ItemList>
          </Column>

          <Column data-aos="fade-left" data-aos-delay="200">
            <ColumnTitle className="solutions">
              <span className="icon">
                <IconCircleCheck size={28} />
              </span>
              Our Solutions
            </ColumnTitle>
            <ItemList>
              {solutions.map((solution, index) => (
                <Item key={index} $index={index} className="solution">
                  <span className="item-icon">
                    <IconCircleCheckFilled size={20} color="#5987c2" />
                  </span>
                  <span className="item-text">{solution}</span>
                </Item>
              ))}
            </ItemList>
          </Column>
        </ContentGrid>
      </Container>
    </Section>
  );
};
