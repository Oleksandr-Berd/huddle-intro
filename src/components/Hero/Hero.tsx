import { ReactComponent as HeroImgLargeMob } from "../../assets/pics/heroTable_mob.svg";
import { ReactComponent as HeroImgSmallMob } from "../../assets/pics/heroTableSmall_mob.svg";

import * as SC from "./HeroStyled"
const Hero = () => {
  return (
    <SC.HeroStyled>
      <HeroImgLargeMob />
      <HeroImgSmallMob />
    </SC.HeroStyled>
  );
};

export default Hero;
