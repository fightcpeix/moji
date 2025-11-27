'use client';

import styled from 'styled-components';
import { Container } from './Container';
import Image from 'next/image';

const FooterWrapper = styled.footer`
  background: #0f172a;
  color: white;
  padding: 60px 0 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 20;
  position: relative;
`;

const FooterContent = styled(Container)`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: white;
  }

  p {
    font-size: 0.95rem;
    color: #94a3b8;
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.75rem;

      a {
        color: #94a3b8;
        text-decoration: none;
        transition: color 0.3s ease;
        font-size: 0.95rem;

        &:hover {
          color: #3b82f6;
        }
      }
    }
  }
`;

const Brand = styled.div`
  .logo {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    .text-logo {
      margin-top: 20px;
      margin-bottom: 0;
      font-weight: 700;
      gap: 5px;
      font-size: 1.6rem;
      line-height: 1.1em;
      align-items: center;
      background: linear-gradient(135deg, #659af1 0%, #788ba3 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .sub-title {
      margin: 0;
      color: #94a3b8;
      text-align: right;
      letter-spacing: 3px;
      font-size: 15px;
    }
  }
`;

const FooterBottom = styled.div`
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;

  p {
    color: #64748b;
    font-size: 0.875rem;
    margin: 0;
  }
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterColumn>
          <Brand>
            <div className="logo">
              <Image
                src="/images/logo1.svg"
                alt="logo"
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
              />
              <div>
                <p className="text-logo">MOJI HOUSE</p>
                <p className="sub-title">WHITE PAPER</p>
              </div>
            </div>
            <p>
              Revolutionizing real estate with blockchain technology. Building a
              transparent, secure, and accessible digital property marketplace.
            </p>
          </Brand>
        </FooterColumn>

        <FooterColumn>
          <h4>Platform</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#tokenomics">Tokenomics</a>
            </li>
            <li>
              <a href="#roadmap">Roadmap</a>
            </li>
          </ul>
        </FooterColumn>

        <FooterColumn>
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#whitepaper">Whitepaper</a>
            </li>
            <li>
              <a href="#docs">Documentation</a>
            </li>
            <li>
              <a href="#audit">Audit Reports</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </FooterColumn>

        <FooterColumn>
          <h4>Community</h4>
          <ul>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
          </ul>
        </FooterColumn>
      </FooterContent>

      <Container>
        <FooterBottom>
          <p>
            © 2025 Moji House. All rights reserved. Built on blockchain
            technology.
          </p>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};
