/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import * as S from './Header.styled';
import Logo from '../Atomic/Logo/Logo';
import Gnb from '../Atomic/Gnb/Gnb';


function Header() {
  return (
    <>
      <S.Head>
        <div
          css={css`
            display: flex;
          `}
        >
          <Logo />
          <Gnb />
        </div>

        <div>
          <div className="lang">KO-KR</div>
          <button>가입하기</button>
        </div>
      </S.Head>
    </>
  );
}

export default Header;
