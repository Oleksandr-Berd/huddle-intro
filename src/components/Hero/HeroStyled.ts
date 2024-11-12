import styled from "styled-components";

export const HeroStyled = styled.div`
  position: relative;

  margin-bottom: 95px;

  @media (min-width: 1220px) {
    padding-left: 40px;

    text-align: left;
  }

  & > *:nth-child(1) {
    @media (min-width: 1220px) {
      width: 658px;
      height: 411px;
    }
  }

  & > *:nth-child(2) {
    position: absolute;
    top: 0;
    right: 0;

    transform: translate(20%, 50%);

    @media (min-width: 1220px) {
      left: 0;

      transform: translate(506px, 50%);

      width: 219px;
      height: 351px;
    }
  }
`;
