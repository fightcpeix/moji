'use client';

import styled from 'styled-components';
import {
  Container,
  SectionTitle,
  SectionSubtitle
} from '@/components/common/Container';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n/context';

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
    font-weight: 700;
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

export const Tokenomics = () => {
  const { t } = useI18n();

  const allocations = [
    {
      name: t('tokenomics.allocation.items.0.name'),
      percentage: 2,
      note: t('tokenomics.allocation.items.0.note')
    },
    {
      name: t('tokenomics.allocation.items.1.name'),
      percentage: 5,
      note: t('tokenomics.allocation.items.1.note')
    },
    {
      name: t('tokenomics.allocation.items.2.name'),
      percentage: 5,
      note: t('tokenomics.allocation.items.2.note')
    },
    {
      name: t('tokenomics.allocation.items.3.name'),
      percentage: 5,
      note: t('tokenomics.allocation.items.3.note')
    },
    {
      name: t('tokenomics.allocation.items.4.name'),
      percentage: 25,
      note: t('tokenomics.allocation.items.4.note')
    },
    {
      name: t('tokenomics.allocation.items.5.name'),
      percentage: 25,
      note: t('tokenomics.allocation.items.5.note')
    },
    {
      name: t('tokenomics.allocation.items.6.name'),
      percentage: 25,
      note: t('tokenomics.allocation.items.6.note')
    },
    {
      name: t('tokenomics.allocation.items.7.name'),
      percentage: 8,
      note: t('tokenomics.allocation.items.7.note')
    }
  ];

  return (
    <Section id="tokenomics">
      <Container>
        <StyledSectionTitle>{t('tokenomics.title')}</StyledSectionTitle>
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
          {t('tokenomics.subtitle')}
        </StyledSectionSubtitle>

        <TokenInfoGrid>
          <InfoCard>
            <div className="label">{t('tokenomics.info.symbol.label')}</div>
            <div className="value">{t('tokenomics.info.symbol.value')}</div>
            <div className="description">
              {t('tokenomics.info.symbol.description')}
            </div>
          </InfoCard>

          <InfoCard>
            <div className="label">{t('tokenomics.info.supply.label')}</div>
            <div className="value">{t('tokenomics.info.supply.value')}</div>
            <div className="description">
              {t('tokenomics.info.supply.description')}
            </div>
          </InfoCard>

          <InfoCard>
            <div className="label">{t('tokenomics.info.tax.label')}</div>
            <div className="value">{t('tokenomics.info.tax.value')}</div>
            <div className="description">
              {t('tokenomics.info.tax.description')}
            </div>
          </InfoCard>

          <InfoCard>
            <div className="label">{t('tokenomics.info.burn.label')}</div>
            <div className="value">{t('tokenomics.info.burn.value')}</div>
            <div className="description">
              {t('tokenomics.info.burn.description')}
            </div>
          </InfoCard>
        </TokenInfoGrid>

        <AllocationSection>
          <AllocationTitle>{t('tokenomics.allocation.title')}</AllocationTitle>
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
