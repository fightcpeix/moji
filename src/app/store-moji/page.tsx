'use client';

import styled from 'styled-components';
import { Container } from '@/components/common/Container';
import Navbar from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { useI18n } from '@/lib/i18n/context';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(90deg, rgb(15 22 40) 0%, rgb(41 48 66) 100%);
  color: white;
  font-family: Prompt;
  @keyframes rotateBox {
    from {
      transform: rotate(0);
      opacity: 0.1;
    }
    50% {
      transform: rotate(180deg) scale(1.4);
      opacity: 0.4;
    }
    to {
      transform: rotate(0deg);
      opacity: 0.1;
    }
  }
  &::after {
    content: '';
    width: 300px;
    height: 300px;
    background: url('/images/box-crypto.webp');
    background-size: contain;
    background-attachment: fixed;
    position: fixed;
    left: 5%;
    top: 50%;
    z-index: 1;
    animation: rotateBox 20s ease-in-out infinite reverse;
  }
  &::before {
    content: '';
    width: 200px;
    height: 200px;
    background: url('/images/box-home.webp');
    background-size: contain;
    background-attachment: fixed;
    position: fixed;
    right: 5%;
    top: 15%;
    z-index: 1;
    animation: rotateBox 20s ease-in-out infinite reverse;
  }
`;

const HeroSection = styled.section`
  padding: 150px 0 10px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 120px 0 60px;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #428fff 0%, #8db9fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  color: #8db9fc;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Intro = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #cdd4d6;
  max-width: 900px;
  margin: 0 auto 4rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StepsSection = styled.section`
  padding: 20px;
  display: flex;
  justify-content: center;
  .container-custom {
    width: 800px;
    max-width: 100%;
  }
`;

const StepCard = styled.div`
  border-radius: 32px;
  padding: 2rem;
  margin-bottom: 3rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 10;

  &:hover {
    transform: translateY(-4px);
    &::after {
      backdrop-filter: blur(20px);
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const StepHeader = styled.span`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 968px) {
    justify-content: flex-start;
  }
`;

const StepNumber = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5987c2 0%, #93b2da 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const StepContent = styled.div<{ $isReverse: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  align-items: flex-start;
  ${({ $isReverse }) =>
    $isReverse ? `flex-direction: row;` : `flex-direction: row-reverse;`}

  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const StepDescription = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #cdd4d6;
  margin: 0;
  flex: 1;

  @media (max-width: 968px) {
    width: 100%;
    text-align: left;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StepImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: max-content;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 968px) {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const NoteSection = styled.div`
  position: relative;
  border-radius: 16px;
  padding: 2rem;
  margin: 4rem 0;
  text-align: center;
  overflow: hidden;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(89, 135, 194, 0.104) 0%,
      rgba(147, 178, 218, 0.076) 100%
    );
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 3rem 0;
  }
`;

const NoteTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #93b2da;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const NoteDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: white;
  margin: 0 0 2rem 0;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const NoteImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const NoteImageBox = styled.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid rgba(147, 178, 218, 0.3);
  background: rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const StyledLink = styled.a`
  color: #93b2da;
  text-decoration: underline;
  transition: color 0.3s ease;

  &:hover {
    color: #5987c2;
  }
`;

export default function StoreMojiPage() {
  const { t } = useI18n();
  const steps = t('storeMoji.steps') as unknown as Array<{
    title: string;
    description: string;
  }>;

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  const renderDescription = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <StyledLink
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
          >
            {part}
          </StyledLink>
        );
      }
      return part;
    });
  };

  return (
    <PageWrapper>
      <Navbar />
      <HeroSection>
        <Container>
          <Title data-aos="fade-down">{t('storeMoji.title')}</Title>
          <Subtitle data-aos="fade-down" data-aos-delay="100">
            {t('storeMoji.subtitle')}
          </Subtitle>
          <Intro data-aos="fade-up" data-aos-delay="200">
            {t('storeMoji.intro')}
          </Intro>
        </Container>
      </HeroSection>

      <StepsSection>
        <div className="container-custom">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={index * 100}
            >
              <StepContent $isReverse={index % 2 === 0}>
                <StepDescription>
                  <StepHeader>
                    <StepNumber>{index + 1}</StepNumber>
                    <StepTitle>{step.title}</StepTitle>
                  </StepHeader>
                  <p>{renderDescription(step.description)}</p>
                </StepDescription>
                <StepImageWrapper>
                  <img
                    src={`/images/store/store${index + 1}.webp`}
                    alt={step.title}
                    style={{ objectFit: 'contain' }}
                  />
                </StepImageWrapper>
              </StepContent>
            </StepCard>
          ))}

          <NoteSection data-aos="zoom-in" data-aos-delay="200">
            <NoteTitle>{t('storeMoji.note.title') as string}</NoteTitle>
            <NoteDescription>
              {t('storeMoji.note.description') as string}
            </NoteDescription>
            <NoteImagesWrapper>
              <NoteImageBox>
                <img
                  src="/images/store/store7.webp"
                  alt="BNB Smart Chain Network"
                />
              </NoteImageBox>
              <NoteImageBox>
                <img
                  src="/images/store/store8.webp"
                  alt="BEP20 Network Selection"
                />
              </NoteImageBox>
            </NoteImagesWrapper>
          </NoteSection>
        </div>
      </StepsSection>

      <Footer />
    </PageWrapper>
  );
}
