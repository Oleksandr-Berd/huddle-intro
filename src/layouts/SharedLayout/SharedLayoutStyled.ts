import styled from "styled-components";

import bgIcon from "../../assets/pics/bg-mobile.svg";
import bgIconDesk from "../../assets/pics/bg-desktop.svg";

export const SharedLayoutStyled = styled.div`
  height: 100vh;

  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;

  background-color: #684bb1;
  background-image: url(${bgIcon});

  @media (min-width: 1220px) {
    height: auto;
    padding: 0;

    background-image: url(${bgIconDesk});
  }
`;

export const DeskCon = styled.div`
@media (min-width: 1220px){
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 40px;

    & > *:nth-child(1){
        margin-right: 60px;
    }
}
`