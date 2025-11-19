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
  background: #eff3f8 url('/images/texture/texture1.webp') no-repeat bottom left;
  background-size: 50%;
  scroll-margin-top: 80px;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 60px;
`;

const TeamCard = styled.div<{ $index: number }>`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: ${(props) => props.$index * 0.1}s;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .avatar {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    transition: transform 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 150px;
      height: 150px;
      background: rgba(59, 130, 246, 0.2);
      border-radius: 50%;
    }

    .emoji {
      position: relative;
      z-index: 1;
    }
  }

  .info {
    padding: 2rem;
    text-align: center;

    .role {
      font-size: 0.875rem;
      color: #3b82f6;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 0.5rem;
    }

    .name {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 0.75rem;
    }

    .description {
      font-size: 0.95rem;
      color: #64748b;
      line-height: 1.6;
    }
  }

  @media (max-width: 640px) {
    .avatar {
      height: 240px;
      font-size: 3rem;
    }

    .info {
      padding: 1.5rem;

      .name {
        font-size: 1.125rem;
      }
    }
  }
`;

const Notice = styled.div`
  margin-top: 4rem;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;

  .icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1em;
    color: #999;
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 640px) {
    padding: 1.5rem;

    .icon {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
`;

const teamEmojis = ['👔', '💼', '⚙️', '📊'];

export const Team = () => {
  const { t } = useI18n();

  const teamMembers = [
    {
      emoji: teamEmojis[0],
      role: t('team.members.0.role'),
      name: t('team.members.0.name'),
      description: t('team.members.0.description')
    },
    {
      emoji: teamEmojis[1],
      role: t('team.members.1.role'),
      name: t('team.members.1.name'),
      description: t('team.members.1.description')
    },
    {
      emoji: teamEmojis[2],
      role: t('team.members.2.role'),
      name: t('team.members.2.name'),
      description: t('team.members.2.description')
    },
    {
      emoji: teamEmojis[3],
      role: t('team.members.3.role'),
      name: t('team.members.3.name'),
      description: t('team.members.3.description')
    }
  ];

  return (
    <Section id="team">
      <Container>
        <SectionTitle>{t('team.title')}</SectionTitle>
        <SectionSubtitle>{t('team.subtitle')}</SectionSubtitle>

        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamCard key={index} $index={index}>
              <div className="info">
                <div className="role">{member.role}</div>
                <div className="name">{member.name}</div>
                <div className="description">{member.description}</div>
              </div>
            </TeamCard>
          ))}
        </TeamGrid>

        <Notice>
          <p>{t('team.notice')}</p>
        </Notice>
      </Container>
    </Section>
  );
};
