import {ReactComponent as FBIcon} from "../../assets/pics/fb.svg"
import { ReactComponent as TwitterIcon } from "../../assets/pics/twitter.svg";
import { ReactComponent as IsntaIcon } from "../../assets/pics/insta.svg";

import * as SC from "./LinksListStyled"




const LinksList:React.FC = () => {
    return ( <SC.ListStyled>
        <FBIcon/>
        <TwitterIcon/>
        <IsntaIcon/>
    </SC.ListStyled> );
}
 
export default LinksList;