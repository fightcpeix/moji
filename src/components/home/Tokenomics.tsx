'use client';

import styled from 'styled-components';
import {
  Container,
  SectionTitle,
  SectionSubtitle
} from '@/components/common/Container';
import { useI18n } from '@/lib/i18n/context';

const Section = styled.div`
  padding: 100px 0;
  background: #050f19;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  color: white;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 80px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/cubehome.webp');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
    z-index: 0;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const StyledSectionTitle = styled(SectionTitle)`
  color: white;
  -webkit-text-fill-color: white;
  position: relative;
  z-index: 10;
  opacity: 1;
`;

const StyledSectionSubtitle = styled(SectionSubtitle)`
  color: #cdd4d6;
  position: relative;
  z-index: 10;
  opacity: 1;
`;

const TokenInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background-size: cover;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(147, 178, 218, 0.2);
  transition: all 0.3s ease;
  opacity: 1;

  .contents {
    z-index: 10;
    position: relative;
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

  &:hover {
    color: white;
    &::after {
      backdrop-filter: blur(20px);
    }
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
    margin-bottom: 0.5rem;
  }

  .description {
    font-size: 0.9em;
    color: #abadaf;
    line-height: 1.5;
  }

  @media (max-width: 640px) {
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
        <StyledSectionSubtitle>
          {t('tokenomics.subtitle')}
        </StyledSectionSubtitle>

        <TokenInfoGrid>
          <InfoCard>
            <div className="contents">
              <div className="label">{t('tokenomics.info.symbol.label')}</div>
              <div className="value">{t('tokenomics.info.symbol.value')}</div>
              <div className="description">
                {t('tokenomics.info.symbol.description')}
              </div>
            </div>
          </InfoCard>

          <InfoCard>
            <div className="contents">
              <div className="label">{t('tokenomics.info.supply.label')}</div>
              <div className="value">{t('tokenomics.info.supply.value')}</div>
              <div className="description">
                {t('tokenomics.info.supply.description')}
              </div>
            </div>
          </InfoCard>

          <InfoCard>
            <div className="contents">
              <div className="label">{t('tokenomics.info.tax.label')}</div>
              <div className="value">{t('tokenomics.info.tax.value')}</div>
              <div className="description">
                {t('tokenomics.info.tax.description')}
              </div>
            </div>
          </InfoCard>

          <InfoCard>
            <div className="contents">
              <div className="label">{t('tokenomics.info.burn.label')}</div>
              <div className="value">{t('tokenomics.info.burn.value')}</div>
              <div className="description">
                {t('tokenomics.info.burn.description')}
              </div>
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
