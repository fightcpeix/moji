'use client';

import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MenuButton from '@/components/common/MenuButton';
import Image from 'next/image';

const NavbarStyle = styled.div<{
  $showMobile: boolean;
  $isScrolled: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  position: fixed;
  width: 100%;
  padding: 0 40px;
  height: 80px;
  z-index: 200;
  transition: all 0.3s ease;
  background: ${({ $isScrolled }) =>
    $isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${({ $isScrolled }) =>
    $isScrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${({ $isScrolled }) =>
    $isScrolled ? '0 2px 10px rgba(89, 135, 194, 0.1)' : 'none'};

  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }

  .menu-button {
    display: none;
  }

  @media screen and (max-width: 968px) {
    height: 70px;
    .menu-button {
      display: block;
    }
  }

  .logo {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;

      .logo-text {
        font-size: 24px;
        font-weight: 800;
        background: linear-gradient(135deg, #4691f1 0%, #93b2da 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;

        @media screen and (max-width: 640px) {
          font-size: 20px;
        }
      }
    }
  }

  .nav-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    margin-left: auto;

    @media screen and (max-width: 968px) {
      display: none;
    }
  }
`;

const NavLink = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: #5987c2;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  padding: 8px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #5987c2 0%, #93b2da 100%);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #93b2da;

    &::after {
      width: 100%;
    }
  }
`;

const CTAButton = styled.button`
  padding: 10px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 50px;
  background: linear-gradient(135deg, #549bf6 0%, #93b2da 100%);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(89, 135, 194, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(89, 135, 194, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const MobileMenuStyle = styled.div<{ $show: boolean }>`
  position: fixed;
  top: 70px;
  left: 0;
  padding: 20px;
  height: calc(100vh - 70px);
  width: 100%;
  flex-direction: column;
  gap: 10px;
  transition: all 0.3s ease;
  display: none;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(15px);

  @media screen and (max-width: 968px) {
    display: flex;
    ${({ $show }) =>
      $show
        ? css`
            opacity: 1;
            z-index: 199;
            visibility: visible;
            transform: translateY(0px);
          `
        : css`
            opacity: 0;
            z-index: -1;
            visibility: hidden;
            transform: translateY(-15px);
          `}
  }
`;

const MobileMenuItem = styled.a`
  padding: 16px 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #5987c2;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #f8fafb;
    color: #93b2da;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const menuItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Tokenomics', id: 'tokenomics' },
  { name: 'Roadmap', id: 'roadmap' },
  { name: 'Team', id: 'team' }
];

const Navbar = () => {
  const [isShowMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setShowMobileMenu(false);

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const possibleSelectors = [
      `#${id}`,
      `[id="${id}"]`,
      `section[data-section="${id}"]`
    ];

    for (const selector of possibleSelectors) {
      const element = document.querySelector(selector);
      if (element) {
        const offsetTop =
          element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        return;
      }
    }

    const sectionMap: { [key: string]: number } = {
      about: 1,
      tokenomics: 4,
      roadmap: 5,
      team: 6
    };

    const sections = document.querySelectorAll('section');
    const sectionIndex = sectionMap[id];

    if (sections[sectionIndex]) {
      const offsetTop =
        sections[sectionIndex].getBoundingClientRect().top +
        window.pageYOffset -
        80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <>
      <NavbarStyle $showMobile={isShowMobileMenu} $isScrolled={isScrolled}>
        <div className="menu-button">
          <MenuButton
            open={isShowMobileMenu}
            handleClick={() => {
              setShowMobileMenu(!isShowMobileMenu);
            }}
          />
        </div>

        <div className="logo">
          <Link href="/">
            <Image
              src="/images/logo1.svg"
              alt="Moji House Logo"
              width={80}
              height={50}
              style={{ objectFit: 'contain' }}
            />
            <span className="logo-text">MOJI HOUSE</span>
          </Link>
        </div>

        <div className="nav-menu">
          {menuItems.map((item, index) => (
            <NavLink key={index} onClick={() => scrollToSection(item.id)}>
              {item.name}
            </NavLink>
          ))}
          <CTAButton onClick={() => scrollToSection('fundraising')}>
            Join Presale
          </CTAButton>
        </div>
      </NavbarStyle>

      <MobileMenuStyle $show={isShowMobileMenu}>
        {menuItems.map((item, index) => (
          <MobileMenuItem key={index} onClick={() => scrollToSection(item.id)}>
            {item.name}
          </MobileMenuItem>
        ))}
        <MobileMenuItem onClick={() => scrollToSection('fundraising')}>
          <strong>Join Presale</strong>
        </MobileMenuItem>
      </MobileMenuStyle>
    </>
  );
};

export default Navbar;
