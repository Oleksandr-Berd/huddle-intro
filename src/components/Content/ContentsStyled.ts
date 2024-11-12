import styled from "styled-components";

export const ContentCon = styled.div`
  margin-bottom: 64px;

  @media (min-width: 1220px){
    text-align: left;
  }
`;

export const Title = styled.h3`
  margin-bottom: 16px;

  font-family: "Poppins";
  font-size: 24px;
  line-height: 1.5;
  color: #fff;

  @media (min-width: 1220px){
    font-size: 40px;
    line-height: 1.5;
  }
`;

export const Text = styled.p`
  margin-bottom: 24px;

  font-family: "OpenSans";
  color: #fff;
  font-size: 16px;
  line-height: 1.5;

  @media (min-width: 1220px){
    font-size: 18px;
  }
`;

export const Button = styled.button`
  padding-left: 76px;
  padding-top: 11px;
  padding-right: 75px;
  padding-bottom: 11px;

  font-size: 12px;
  line-height: 1.5;
  background-color: #fff;
  color: #684bb1;

  border: none;
  border-radius: 20px;

  @media (min-width: 1220px) {
    padding-left: 64px;
    padding-top: 13px;
    padding-right: 63px;
    padding-bottom: 16 px;

    font-size: 18px;
    transition: color 3s cubic-bezier(0.075, 0.82, 0.165, 1),
      background-color 3s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover,
    &:active,
    &:focus {
      background-color: #e880e8;
      color: #979797;
      transition: color 1s cubic-bezier(0.075, 0.82, 0.165, 1),
        background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        cursor: pointer;
    }
  }
`;
