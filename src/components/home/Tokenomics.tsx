'use client';

import styled from 'styled-components';
import {
  Container,
  SectionTitle,
  SectionSubtitle
} from '@/components/common/Container';
import Image from 'next/image';

const Section = styled.div`
  padding: 100px 0;
  background: linear-gradient(135deg, rgb(26, 26, 26) 0%, rgb(45, 45, 45) 100%);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  color: white;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 80px;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 1000px;
    height: 1000px;
    background: radial-gradient(
      circle,
      rgba(89, 135, 194, 0.15) 0%,
      transparent 70%
    );
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const StyledSectionTitle = styled(SectionTitle)`
  color: white;
  -webkit-text-fill-color: white;
`;

const StyledSectionSubtitle = styled(SectionSubtitle)`
  color: #cdd4d6;
`;

const TokenInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(147, 178, 218, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(89, 135, 194, 0.2);
  }

  .label {
    font-size: 0.875rem;
    color: #93b2da;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }

  .value {
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(135deg, #93b2da 0%, #5987c2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .description {
    font-size: 0.95rem;
    color: #cdd4d6;
    margin-top: 0.5rem;
    line-height: 1.6;
  }

  @media (max-width: 640px) {
    padding: 1.5rem;

    .value {
      font-size: 1.5rem;
    }
  }
`;

const AllocationSection = styled.div`
  margin-top: 4rem;
  position: relative;
  z-index: 1;
`;

const AllocationTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: white;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

const AllocationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const AllocationCard = styled.div<{ $percentage: number }>`
  // background: url('/images/cards/home1.webp') center center no-repeat;
  background-size: cover;
  backdrop-filter: blur(10px);
  .contents {
    z-index: 10;
  }
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    transition: 0.3s;
  }
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(147, 178, 218, 0.2);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    width: calc(100% - 20px);
    height: 6px;
    border-radius: 10px;
    background: linear-gradient(90deg, #5987c2 0%, #93b2da 100%);
    transform: scaleX(${(props) => props.$percentage / 100});
    transform-origin: left;
  }

  &:hover {
    color: white;
    &::after {
      backdrop-filter: blur(20px);
    }
  }

  .percentage {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #93b2da 0%, #5987c2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }

  .allocation-name {
    font-size: 1.1em;
    font-weight: 600;
    color: white;
    margin-bottom: 0.5rem;
  }

  .allocation-note {
    font-size: 0.9em;
    color: #abadaf;
    line-height: 1.5;
  }

  @media (max-width: 640px) {
    .percentage {
      font-size: 2rem;
    }

    .allocation-name {
      font-size: 1rem;
    }
  }
`;

const allocations = [
  { name: 'Airdrop', percentage: 2, note: 'Community Incentive' },
  {
    name: 'Presale',
    percentage: 5,
    note: '0.01 USDT per token – Development & Ecosystem'
  },
  {
    name: 'Public Sale',
    percentage: 5,
    note: '0.02 USDT per token – Marketing & Partnerships'
  },
  { name: 'Activate Reward Pool', percentage: 5, note: 'Initial Distribution' },
  {
    name: 'Locked Reward Pool (1st)',
    percentage: 25,
    note: 'Long-term Ecosystem Reserve'
  },
  {
    name: 'Locked Reward Pool (2nd)',
    percentage: 25,
    note: 'Long-term Ecosystem Reserve'
  },
  {
    name: 'Locked Reward Pool (3rd)',
    percentage: 25,
    note: 'Long-term Ecosystem Reserve'
  },
  { name: 'Team & Advisors', percentage: 8, note: 'Development and Governance' }
];

export const Tokenomics = () => {
  return (
    <Section id="tokenomics">
      <Container>
        <StyledSectionTitle>Tokenomics</StyledSectionTitle>
        <div className="flex justify-center">
          <div className="relative w-[300px] h-[300px] max-w-full">
            <Image
              fill
              src="/images/texture/cube-light2.webp"
              style={{ objectFit: 'contain' }}
              alt="tokenomics"
            />
          </div>
        </div>
        <StyledSectionSubtitle>
          The total supply corresponds to the global population — based on the
          concept that every person deserves one home
        </StyledSectionSubtitle>

        <TokenInfoGrid>
          <InfoCard>
            <div className="label">Token Symbol</div>
            <div className="value">MOJI</div>
            <div className="description">
              Official token for the Moji House ecosystem
            </div>
          </InfoCard>

          <InfoCard>
            <div className="label">Total Supply</div>
            <div className="value">8.2B+</div>
            <div className="description">
              Minted until reaching 8,205,134,767 tokens
            </div>
          </InfoCard>

          <InfoCard>
            <div className="label">Transaction Tax</div>
            <div className="value">7%</div>
            <div className="description">
              Automatically redirected to Reward Pool for sustainability
            </div>
          </InfoCard>

          <InfoCard>
            <div className="label">Token Burn</div>
            <div className="value">Progressive</div>
            <div className="description">
              Targeting 25% remaining supply (1 household per 4 people)
            </div>
          </InfoCard>
        </TokenInfoGrid>

        <AllocationSection>
          <AllocationTitle>Token Allocation</AllocationTitle>
          <AllocationGrid>
            {allocations.map((allocation, index) => (
              <AllocationCard key={index} $percentage={allocation.percentage}>
                <div className="contents">
                  <div className="percentage">{allocation.percentage}%</div>
                  <div className="allocation-name">{allocation.name}</div>
                  <div className="allocation-note">{allocation.note}</div>
                </div>
              </AllocationCard>
            ))}
          </AllocationGrid>
        </AllocationSection>
      </Container>
    </Section>
  );
};
