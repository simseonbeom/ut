// import { css } from '@emotion/react';

import * as S from './Header.styled';
import Logo from '../../Atomic/Logo/Logo';
import Lang from '../../Atomic/Buttons/Lang';
import Button from '../../Atomic/Link/Sign';
import Gnb from '../../Molecules/Gnb/Gnb';

function Header() {
  return (
    <>
      <S.Head>
        <div>
          <div>
            <Logo />
            <Gnb />
          </div>

          <div>
            <Lang />
            <Button />
          </div>
        </div>
      </S.Head>
    </>
  );
}

export default Header;
