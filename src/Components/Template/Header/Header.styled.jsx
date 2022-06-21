import styled from '@emotion/styled';

export const Head = styled.header`
  padding: ${({ theme: { global } }) => global.Spacing.value}px;
  background: ${({ theme: { themeConfig } }) => themeConfig.primary.value};
  box-sizing: border-box;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;

  > div {
    max-width: 1408px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 12px 64px;
    color: ${({ theme: { themeConfig } }) => themeConfig.secondary.value};

    > div {
      display: flex;
      align-items: center;
    }
  }
`;
