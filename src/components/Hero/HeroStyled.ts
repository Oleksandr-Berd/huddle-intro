import styled from "styled-components";

export const HeroStyled = styled.div`
position: relative;

margin-bottom: 95px;

& >*:nth-child(2){
    position: absolute;
    top:0;
    right: 0;

    transform: translate(20%, 50%);
}
`

