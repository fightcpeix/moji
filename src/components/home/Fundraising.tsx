'use client';

import styled from 'styled-components';
import {
  Container,
  SectionTitle,
  SectionSubtitle
} from '@/components/common/Container';
import {
  IconClipboardCheck,
  IconDatabaseSearch,
  IconShieldCheck
} from '@tabler/icons-react';
import { useI18n } from '@/lib/i18n/context';

const Section = styled.div`
  padding: 100px 0;
  background: #f7f7f7 url('/images/texture/texture2.webp') no-repeat bottom
    right;
  scroll-margin-top: 80px;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SaleRoundsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SaleCard = styled.div<{ $variant: 'presale' | 'public' }>`
  background: ${(props) =>
    props.$variant === 'presale'
      ? 'linear-gradient(135deg, #fff 0%, #d4e5f1 100%)'
      : 'linear-gradient(135deg, #fff 0%, #e3eef7 100%)'};
  padding: 3rem;
  border-radius: 20px;
  ${(props) => (props.$variant === 'presale' ? '#5987c2' : '#93b2da')};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 12px 40px
    ${(props) =>
      props.$variant === 'presale'
        ? 'rgba(33,68,113,0.25)'
        : 'rgba(147, 178, 218, 0.25)'};

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200px;
    height: 200px;
    background: ${(props) =>
      props.$variant === 'presale'
        ? 'rgba(89, 135, 194, 0.15)'
        : 'rgba(147, 178, 218, 0.15)'};
    border-radius: 50%;
  }

  &:hover {
    transform: translateY(-8px);
  }

  .badge {
    display: inline-block;
    background: ${(props) =>
      props.$variant === 'presale' ? '#f6b50b' : '#2e456e'};
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }

  .percentage {
    font-size: 5rem;
    font-weight: 900;
    color: ${(props) => (props.$variant === 'presale' ? '#ffa000' : '#93b2da')};
  }

  .price {
    font-size: 1.1rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }

  .description {
    font-size: 1rem;
    color: #6b7280;
    line-height: 1.6;
  }

  @media (max-width: 640px) {
    padding: 2rem;

    h3 {
      font-size: 1.5rem;
    }

    .percentage {
      font-size: 2.5rem;
    }

    .price {
      font-size: 1.25rem;
    }
  }
`;

const SecuritySection = styled.div`
  margin-top: 60px;
  background: linear-gradient(
    135deg,
    #e8f1f8 0%,
    rgba(212, 229, 241, 0.53) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 20px;

  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 2rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .icon {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 640px) {
    padding: 2rem;

    h3 {
      font-size: 1.5rem;
      flex-direction: column;

      .icon {
        font-size: 2rem;
      }
    }
  }
`;

const SecurityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SecurityItem = styled.div`
  background: rgba(255, 255, 255, 0.48);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(89, 135, 194, 0.2);
    border-color: #93b2da;
  }

  .icon {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }

  .title {
    font-size: 1.125rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
  }

  .description {
    font-size: 0.95rem;
    color: #6b7280;
    line-height: 1.6;
  }

  @media (max-width: 640px) {
    padding: 1.25rem;

    .icon {
      font-size: 2rem;
    }

    .title {
      font-size: 1rem;
    }
  }
`;

const PurchaseInfo = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;

  .label {
    font-size: 1.6rem;
    color: #1a1a1a;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .info {
    font-size: 1.125rem;
    color: #6b7280;
    line-height: 1.6;
  }

  @media (max-width: 640px) {
    padding: 1.5rem;

    .label {
      font-size: 0.95rem;
    }

    .info {
      font-size: 1rem;
    }
  }
`;

export const Fundraising = () => {
  const { t } = useI18n();

  const securityItems = [
    {
      icon: IconClipboardCheck,
      title: t('fundraising.security.items.0.title'),
      description: t('fundraising.security.items.0.description')
    },
    {
      icon: IconShieldCheck,
      title: t('fundraising.security.items.1.title'),
      description: t('fundraising.security.items.1.description')
    },
    {
      icon: IconDatabaseSearch,
      title: t('fundraising.security.items.2.title'),
      description: t('fundraising.security.items.2.description')
    }
  ];

  return (
    <Section id="fundraising">
      <Container>
        <SectionTitle data-aos="fade-down">
          {t('fundraising.title')}
        </SectionTitle>
        <SectionSubtitle data-aos="fade-up" data-aos-delay="100">
          {t('fundraising.subtitle')}
        </SectionSubtitle>

        <ContentWrapper>
          <SaleRoundsGrid>
            <SaleCard
              $variant="presale"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="badge">{t('fundraising.presale.badge')}</div>
              <h3>{t('fundraising.presale.title')}</h3>
              <div className="percentage">
                {t('fundraising.presale.percentage')}
              </div>
              <div className="price">{t('fundraising.presale.price')}</div>
              <div className="description">
                {t('fundraising.presale.description')}
              </div>
            </SaleCard>

            <SaleCard $variant="public" data-aos="zoom-in" data-aos-delay="300">
              <div className="badge">{t('fundraising.publicSale.badge')}</div>
              <h3>{t('fundraising.publicSale.title')}</h3>
              <div className="percentage">
                {t('fundraising.publicSale.percentage')}
              </div>
              <div className="price">{t('fundraising.publicSale.price')}</div>
              <div className="description">
                {t('fundraising.publicSale.description')}
              </div>
            </SaleCard>
          </SaleRoundsGrid>

          <PurchaseInfo data-aos="fade-up" data-aos-delay="100">
            <div className="label">{t('fundraising.purchase.label')}</div>
            <div className="info">{t('fundraising.purchase.info')}</div>
          </PurchaseInfo>

          <SecuritySection data-aos="fade-up" data-aos-delay="200">
            <h3>{t('fundraising.security.title')}</h3>

            <SecurityGrid>
              {securityItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <SecurityItem
                    key={index}
                    data-aos="flip-left"
                    data-aos-delay={(index + 1) * 100}
                  >
                    <div className="icon">
                      <Icon size={50} />
                    </div>
                    <div className="title">{item.title}</div>
                    <div className="description">{item.description}</div>
                  </SecurityItem>
                );
              })}
            </SecurityGrid>
          </SecuritySection>
        </ContentWrapper>
      </Container>
    </Section>
  );
};
