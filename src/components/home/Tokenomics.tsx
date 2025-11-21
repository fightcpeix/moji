'use client';

import styled from 'styled-components';
import {
  Container,
  SectionTitle,
  SectionSubtitle
} from '@/components/common/Container';
import { useI18n } from '@/lib/i18n/context';

const Section = styled.div`
  padding: 0;
  background-image: url('/images/cubehome.webp');
  background-position: left top;
  color: white;
  position: relative;
  overflow: hidden;

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
  margin-top: 50px;
`;

const StyledSectionSubtitle = styled(SectionSubtitle)`
  color: #eee;
  position: relative;
  z-index: 10;
  font-weight: 400;
  font-size: 1.5em;
  opacity: 1;
  @media screen and (max-width: 650px) {
    font-size: 1.2em;
  }
`;

const TokenInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem;
  margin-bottom: 4rem;
  position: relative;
  z-index: 10;
  padding: 40px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background-size: cover;
  background: #2e2e2e4f;
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  position: relative;
  overflow: hidden;
  padding: 1.5rem;
  border-radius: 16px;
  transition: all 0.3s ease;
  opacity: 1;

  .contents {
    z-index: 10;
    position: relative;
  }

  &:hover {
    color: white;
  }

  .label {
    font-size: 0.875rem;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }

  .value {
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(135deg, #5ea2fb 0%, white 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }

  .description {
    font-size: 0.9em;
    color: #bbb;
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
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: white;
  text-shadow: 3px 3px 3px #1a1a1a;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

const AllocationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2.4rem;
  padding-bottom: 6rem;
`;

const AllocationCard = styled.div<{ $percentage: number }>`
  // background: url('/images/cards/home1.webp') center center no-repeat;
  background-size: cover;
  background: rgba(53, 53, 53, 0.45);
  backdrop-filter: blur(10px);

  .contents {
    z-index: 10;
  }

  padding: 1.5rem;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  .line-percent {
    content: '';
    position: relative;
    width: 100%;
    height: 4px;
    border-radius: 10px;
    background: linear-gradient(90deg, #5987c2 0%, white 100%);
    transform: scaleX(${(props) => props.$percentage / 100});
    transform-origin: left;
    margin-bottom: 10px;
  }

  &:hover {
    color: white;
  }

  .percentage {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #93b2da 0%, #5987c2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0;
  }

  .allocation-name {
    font-size: 1.1em;
    font-weight: 600;
    color: white;
    margin-bottom: 0.5rem;
  }

  .allocation-note {
    font-size: 0.9em;
    color: #bbb;
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
                  <div className="line-percent"></div>
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
