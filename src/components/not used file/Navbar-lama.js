import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaShoppingCart, FaDollarSign } from "react-icons/fa";
import logo from "../img/trishop.png";
const Navbar2 = () => {
  return (
    <NavWrapper className="navbar navbar-expend-sm sticky-top navbar navbar-dark px-sm-5">
      <Link className="navbar-brand" to="/">
        <img
          src={logo}
          alt="store"
          className="navbar-brand"
          style={{ width: "auto", height: "50px" }}
        />
      </Link>
      <span>
        <form className="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Category"
            aria-label="Search"
          />
          <ButtonContainer class="btn btn-secondary my-2 my-sm-0" type="submit">
            <i class="fas fa-search"></i>
          </ButtonContainer>
        </form>
      </span>
      <div>
        <ButtonContainer className="mr-4">
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
        </ButtonContainer>
        <ButtonContainer className="mr-4">
          <Link to="/seller">
            <FaDollarSign />
          </Link>
        </ButtonContainer>
        <Link className="btn btn-primary" to="/login">
          Login
        </Link>
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  background: rgba(0, 17, 107, 0.7);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${(prop) => (prop.cart ? "var(--mainYellow)" : "var(--white)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${(prop) =>
      prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;

export default Navbar2;
