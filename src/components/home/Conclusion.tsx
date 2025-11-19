'use client';

import styled from 'styled-components';
import { Container } from '@/components/common/Container';
import { TypedText } from '@/components/common/TypedText';
import { IconBox, IconHome, IconWorld } from '@tabler/icons-react';

const Section = styled.div`
  padding: 120px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafb 50%, #f5f7f9 100%);
  position: relative;
  overflow: hidden;

  /* Floating circles decoration */
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 5%;
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(89, 135, 194, 0.08) 0%,
      transparent 70%
    );
    border-radius: 50%;
    animation: floatCircle1 20s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 10%;
    right: 5%;
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(147, 178, 218, 0.08) 0%,
      transparent 70%
    );
    border-radius: 50%;
    animation: floatCircle2 25s ease-in-out infinite;
  }

  @keyframes floatCircle1 {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(30px, -30px) scale(1.1);
    }
  }

  @keyframes floatCircle2 {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(-30px, 30px) scale(1.1);
    }
  }

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  color: #1a1a1a;
  margin-bottom: 2rem;
  line-height: 1.2;

  .highlight {
    background: linear-gradient(135deg, #5987c2 0%, #93b2da 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #6b7280;
  line-height: 1.8;
  margin-bottom: 1.5rem;

  @media (max-width: 640px) {
    font-size: 1.125rem;
  }
`;

const Mission = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 24px;
  margin: 3rem 0;
  box-shadow: 0 4px 20px rgba(89, 135, 194, 0.08);
  position: relative;
  overflow: hidden;

  p {
    font-size: 1.25rem;
    color: #1a1a1a;
    line-height: 1.8;
    margin: 0;

    .bold {
      font-weight: 700;
      background: linear-gradient(135deg, #5987c2 0%, #93b2da 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  @media (max-width: 640px) {
    padding: 2rem;

    p {
      font-size: 1rem;
    }
  }
`;

const CTASection = styled.div`
  margin-top: 4rem;
`;

const CTATitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 2rem;

  @media (max-width: 640px) {
    font-size: 1.75rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Button = styled.button<{ $variant: 'primary' | 'secondary' }>`
  padding: 1.25rem 3rem;
  font-size: 1.25rem;
  font-weight: 700;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;

  ${(props) =>
    props.$variant === 'primary'
      ? `
    background: linear-gradient(135deg, #5987c2 0%, #93b2da 100%);
    color: white;
    box-shadow: 0 8px 30px rgba(89, 135, 194, 0.3);

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      transition: width 0.6s, height 0.6s;
    }

    &:hover {
      transform: translateY(-4px) scale(1.05);
      box-shadow: 0 12px 40px rgba(89, 135, 194, 0.5);

      &::before {
        width: 300px;
        height: 300px;
      }
    }
  `
      : `
    background: white;
    color: #5987c2;
    border: 3px solid #5987c2;

    &:hover {
      background: #5987c2;
      color: white;
      transform: translateY(-4px) scale(1.05);
      box-shadow: 0 8px 20px rgba(89, 135, 194, 0.3);
    }
  `}

  &:active {
    transform: translateY(-2px) scale(1.02);
  }

  span {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 640px) {
    padding: 1rem 2rem;
    font-size: 1rem;
    width: 100%;
  }
`;

const FeaturesHighlight = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FeatureItem = styled.div<{ $index: number }>`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: ${(props) => props.$index * 0.2}s;
  transition: all 0.3s ease;

  &:hover {
    border-color: #93b2da;
    box-shadow: 0 8px 24px rgba(89, 135, 194, 0.12);
    transform: translateY(-4px);

    .icon {
      transform: scale(1.1);
    }
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    display: inline-block;
    transition: transform 0.3s ease;
  }

  .feature-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
  }

  .feature-desc {
    font-size: 1rem;
    color: #6b7280;
  }

  @media (max-width: 640px) {
    padding: 1.5rem;

    .icon {
      font-size: 2.5rem;
    }

    .feature-title {
      font-size: 1.125rem;
    }

    .feature-desc {
      font-size: 0.95rem;
    }
  }
`;

const Tagline = styled.div`
  margin-top: 4rem;
  padding: 3rem;
  border-radius: 24px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.15) 0%,
      transparent 70%
    );
    border-radius: 50%;
  }

  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: #000000;
    margin: 0;
    font-style: italic;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 640px) {
    padding: 2rem;

    p {
      font-size: 1.25rem;
    }
  }
`;

const features = [
  {
    icon: <IconHome size={60} />,
    title: 'Real Estate',
    desc: 'Tangible asset-backed value'
  },
  {
    icon: <IconBox size={60} />,
    title: 'Blockchain',
    desc: 'Transparent & secure'
  },
  {
    icon: <IconWorld size={60} />,
    title: 'Global',
    desc: 'Borderless marketplace'
  }
];

export const Conclusion = () => {
  return (
    <Section>
      <Container>
        <Content>
          <Title>
            The Future of <span className="highlight">Real Estate</span>
          </Title>

          <Description>
            <TypedText
              text="MOJI is a token built to revolutionize the online real estate industry through Voting, Ranking, Staking, Burning, and Reward systems."
              speed={30}
            />
          </Description>

          <Mission>
            <p>
              Our mission is to establish a{' '}
              <span className="bold">secure, transparent, and accessible</span>{' '}
              digital real estate hub, bridging the tangible value of real-world
              property with cryptocurrency. Moji House represents the first step
              toward integrating{' '}
              <span className="bold">blockchain and smart home technology</span>{' '}
              into global real estate — enabling a truly{' '}
              <span className="bold">
                borderless, community-driven marketplace
              </span>
              .
            </p>
          </Mission>

          <FeaturesHighlight>
            {features.map((feature, index) => (
              <FeatureItem key={index} $index={index}>
                <div className="icon">{feature.icon}</div>
                <div className="feature-title">{feature.title}</div>
                <div className="feature-desc">{feature.desc}</div>
              </FeatureItem>
            ))}
          </FeaturesHighlight>

          <CTASection>
            <CTATitle>Join Us in Building the Future</CTATitle>
            <CTAButtons>
              <Button $variant="primary">
                <span>Join Presale Now</span>
              </Button>
              <Button $variant="secondary">
                <span>Read Whitepaper</span>
              </Button>
            </CTAButtons>
          </CTASection>

          <Tagline>
            <p>
              "Join us in building a limitless real estate ecosystem — the
              future of decentralized property ownership starts here."
            </p>
          </Tagline>
        </Content>
      </Container>
    </Section>
  );
};
