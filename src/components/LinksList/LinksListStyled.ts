import styled from "styled-components";

export const ListStyled = styled.ul`
  & > *:not(:last-child) {
    margin-right: 10px;
  }

  @media (min-width: 1220px) {
    padding-right: 80px;
    padding-bottom: 40px;

    text-align: right;
    transition: fill 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    & > *:hover,
    & > *:focus,
    & > *:active {
      fill: #ff52c1;
      transition: fill 3s cubic-bezier(0.075, 0.82, 0.165, 1);
      cursor: pointer;
    }
  }
`;
