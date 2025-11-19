'use client';

import { useI18n } from '@/lib/i18n/context';
import styled from 'styled-components';

const SwitchStyle = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid rgba(89, 135, 194, 0.46);
  border-radius: 8px;
  overflow: hidden;

  > div {
    padding: 6px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: #6b7280;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.875rem;

    &:hover {
      color: #5987c2;
      background: rgba(89, 135, 194, 0.05);
    }

    &.active {
      background: linear-gradient(135deg, #5987c2 0%, #93b2da 100%);
      color: white;
    }
  }
`;

export function LanguageSwitcher() {
  const { locale, setLocale, isLoading } = useI18n();

  return (
    <div className="flex items-center gap-2">
      <SwitchStyle>
        <div
          className={`${!isLoading && locale === 'en' ? 'active' : ''}`}
          onClick={() => setLocale('en')}
        >
          EN
        </div>
        <div
          className={`${!isLoading && locale === 'th' ? 'active' : ''}`}
          onClick={() => setLocale('th')}
        >
          TH
        </div>
      </SwitchStyle>
    </div>
  );
}
