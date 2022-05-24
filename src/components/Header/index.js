import styled from "styled-components";
import Heading from "../ui/Heading";
import Image from "../ui/Image";
import Paragprah from "../ui/Paragraph";
import logo from "../../assets/img/logo.png";

const StyledHeader = styled.header`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 3rem;

  img {
    margin-bottom: 1rem;
  }

  h2 {
    margin-bottom: 0.5rem;
  }
`;

function Header({ title, description }) {
  return (
    <StyledHeader>
      <Image src={logo} alt="logo" />
      <Heading as="h2">{title}</Heading>
      <Paragprah>{description}</Paragprah>
    </StyledHeader>
  );
}

Header.defaultProps = {
  title: "Selamat Datang di Yubipro",
  description: "Lengkapi data toko untuk membuat toko online",
};

export default Header;
