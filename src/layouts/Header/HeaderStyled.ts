import styled from "styled-components";

export const HeaderStyled = styled.header`
text-align: left;

margin-left: -40px;
margin-bottom: 27px;

@media (min-width: 1220px){
    margin: 0;
    margin-bottom: 60px;
    padding-left: 40px;

    & > *{
        width:365px;
        height: 200px;
    }
}
`