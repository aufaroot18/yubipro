import Heading from "../ui/Heading";
import Image from "../ui/Image";
import Paragprah from "../ui/Paragraph";
import logo from "../../assets/img/logo.png";
import Box from "../ui/Box";
import StyledHeader from "./Index.styled";

function Header({ title, description }) {
  return (
    <StyledHeader>
      <Box mb="1">
        <Image src={logo} alt="logo" />
      </Box>
      <Heading as="h2" mb="0.5">
        {title}
      </Heading>
      <Paragprah>{description}</Paragprah>
    </StyledHeader>
  );
}

Header.defaultProps = {
  title: "Selamat Datang di Yubipro",
  description: "Lengkapi data toko untuk membuat toko online",
};

export default Header;
