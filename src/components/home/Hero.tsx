'use client';

import styled from 'styled-components';
import { Container } from '@/components/common/Container';
import Image from 'next/image';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafb 50%, #f5f7f9 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 800px;
    height: 800px;
    background: radial-gradient(
      circle,
      rgba(89, 135, 194, 0.08) 0%,
      transparent 70%
    );
    border-radius: 50%;
    animation: float 20s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(147, 178, 218, 0.06) 0%,
      transparent 70%
    );
    border-radius: 50%;
    animation: float 15s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%,
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(30px, -30px) rotate(120deg);
    }
    66% {
      transform: translate(-20px, 20px) rotate(240deg);
    }
  }
`;

const HeroContent = styled(Container)`
  position: relative;
  z-index: 1;
  padding: 80px 20px;
  @media screen and (max-width: 650px) {
    padding: 8em 20px 80px 20px;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const TextContent = styled.div`
  h1 {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 1.5rem;
    color: #1a1a1a;

    .gradient-text {
      background: linear-gradient(135deg, #4a91ec 0%, #93b2da 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    @media (max-width: 968px) {
      font-size: 2.5rem;
    }

    @media (max-width: 640px) {
      font-size: 2rem;
    }
  }

  p.subtitle {
    font-size: 1.25rem;
    color: #6b7280;
    line-height: 1.8;
    margin-bottom: 2rem;

    @media (max-width: 640px) {
      font-size: 1rem;
    }
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  ${(props) =>
    props.$variant === 'primary'
      ? `
    background: linear-gradient(135deg, #5799ed 0%, #b3c7e1 100%);
    color: white;
    box-shadow: 0 4px 14px rgba(89, 135, 194, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(89, 135, 194, 0.4);
    }
  `
      : `
    background: white;
    color: #5987c2;
    border: 2px solid #5987c2;

    &:hover {
      background: #f8fafb;
      transform: translateY(-2px);
    }
  `}

  &:active {
    transform: translateY(0);
  }
`;

const ImagePlaceholder = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    object-fit: contain;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -20%;
    left: 80%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, #3c89ec 0%, #93b2da 100%);
    border-radius: 50%;
    opacity: 0.3;
  }

  .placeholder-text {
    position: relative;
    z-index: 1;
    font-size: 1.5rem;
    color: white;
    font-weight: 600;
    text-align: center;
    padding: 20px;
  }

  @media (max-width: 968px) {
    height: 400px;
  }

  @media (max-width: 640px) {
    height: 300px;
  }
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
  padding-top: 4rem;
  border-top: 1px solid #cdd4d6;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatItem = styled.div`
  text-align: center;

  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #3f77bd 0%, #93b2da 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 1rem;
    color: #6b7280;
  }

  @media (max-width: 640px) {
    .stat-number {
      font-size: 2rem;
    }
  }
`;

export const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroGrid>
          <TextContent>
            <h1>
              Revolutionizing
              <br />
              <span className="gradient-text">Real Estate</span>
              <br />
              with Blockchain
            </h1>
            <p className="subtitle">
              Moji House is a platform designed to transform the real estate
              market — leveraging blockchain technology with MOJI Token to build
              transparency, trust, and efficiency in property transactions.
            </p>
          </TextContent>

          <ImagePlaceholder>
            <Image src="/images/hero/ai2.png" fill alt="moji ai" />
          </ImagePlaceholder>
        </HeroGrid>

        <StatsRow>
          <StatItem>
            <div className="stat-number">8.2B+</div>
            <div className="stat-label">Total Token Supply</div>
          </StatItem>
          <StatItem>
            <div className="stat-number">100%</div>
            <div className="stat-label">Blockchain Verified</div>
          </StatItem>
          <StatItem>
            <div className="stat-number">24/7</div>
            <div className="stat-label">AI-Powered Support</div>
          </StatItem>
        </StatsRow>
      </HeroContent>
    </HeroSection>
  );
};
