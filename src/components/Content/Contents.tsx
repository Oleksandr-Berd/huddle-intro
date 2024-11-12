import * as SC from "./ContentsStyled"

const Contents:React.FC = () => {
    return (
      <SC.ContentCon>
        <SC.Title>Build The Community Your Fans Will Love</SC.Title>
        <SC.Text>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.{" "}
        </SC.Text>
        <SC.Button>Register</SC.Button>
      </SC.ContentCon>
    );
}
 
export default Contents;