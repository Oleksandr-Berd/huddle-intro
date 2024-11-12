import { ReactComponent as LogoSvg } from "../../assets/pics/logo.svg";

import * as SC from "./HeaderStyled"

const Header: React.FC = () => {
  return (
    <SC.HeaderStyled>
      <LogoSvg />
    </SC.HeaderStyled>
  );
};

export default Header;
