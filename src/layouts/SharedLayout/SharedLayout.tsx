import Contents from "../../components/Content/Contents";
import Hero from "../../components/Hero/Hero";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import * as SC from "./SharedLayoutStyled";

const SharedLayout: React.FC = () => {
  return (
    <SC.SharedLayoutStyled>
      <Header />
      <Hero/>
      <Contents/>
      <Footer/>
    </SC.SharedLayoutStyled>
  );
};

export default SharedLayout;
