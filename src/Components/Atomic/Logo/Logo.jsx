import styled from '@emotion/styled';

const LogoButton = styled.h1`
  width: 39px;
  height: 39px;
  > svg {
    width: 100%;
    height: 100%;
  }
`;

export default function Logo() {
  return (
    <>
      <LogoButton className="logo">
        <svg
          width={192}
          height={192}
          viewBox="0 0 192 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M156.161 67.062H130.56V145.068H156.161V67.062Z"
            fill="url(#paint0_linear_151_1715)"
          />
          <path
            d="M192 44.4175H94.7212V67.0658H192V44.4175Z"
            fill="url(#paint1_linear_151_1715)"
          />
          <path
            d="M69.12 44.4175V124.935H25.6013V44.4175H0V104.809C0 132.108 19.9373 147.587 47.3587 147.587C74.7802 147.587 94.7174 132.108 94.7174 104.809V44.4175H69.12Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_151_1715"
              x1="143.36"
              y1="145.635"
              x2="143.36"
              y2="68.9062"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EF5394" />
              <stop offset="0.65" stopColor="#8B52A0" />
              <stop offset={1} stopColor="#5D4EA1" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_151_1715"
              x1="95.3395"
              y1="55.7396"
              x2="191.971"
              y2="55.7396"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#65C081" />
              <stop offset="0.0637" stopColor="#62B68B" />
              <stop offset="0.2224" stopColor="#5AA49E" />
              <stop offset="0.3821" stopColor="#5495AB" />
              <stop offset="0.5406" stopColor="#5089B3" />
              <stop offset="0.6972" stopColor="#4D80B8" />
              <stop offset="0.8513" stopColor="#4B7BBB" />
              <stop offset={1} stopColor="#497ABD" />
            </linearGradient>
          </defs>
        </svg>
      </LogoButton>
    </>
  );
}
