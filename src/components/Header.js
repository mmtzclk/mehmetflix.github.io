import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  margin: 2rem 2rem;
  img {
    width: 200px;
  }
`;

export default Header;
