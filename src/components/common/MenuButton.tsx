'use client';

import styled, { css } from 'styled-components';

const MenuButtonStyle = styled.div<{ $isShow: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 24px;
  width: 24px;
  cursor: pointer;
  position: relative;

  &:active {
    opacity: 0.5;
    transform: scale(1.1);
  }

  span {
    width: 100%;
    height: 3px;
    background: #5987c2;
    transition: 0.2s;
    border-radius: 3px;
  }

  ${({ $isShow }) =>
    $isShow &&
    css`
      span {
        &:nth-child(1) {
          position: absolute;
          left: 0;
          top: 50%;
          transform: rotate(45deg);
          width: 100%;
        }
        &:nth-child(2) {
          display: none;
        }
        &:nth-child(3) {
          position: absolute;
          left: 0;
          top: 50%;
          transform: rotate(-45deg);
          width: 100%;
        }
      }
    `}
`;

type MenuButtonProps = {
  open: boolean;
  handleClick: () => void;
};

const MenuButton = ({ open, handleClick }: MenuButtonProps) => {
  return (
    <MenuButtonStyle $isShow={open} onClick={() => handleClick()}>
      <span></span>
      <span></span>
      <span></span>
    </MenuButtonStyle>
  );
};

export default MenuButton;
