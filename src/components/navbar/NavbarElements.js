// import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  padding: 50px 4% 30px 4%;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const SubNav = styled.div`
  display: none;
  position: absolute;
  width: 250px;
  top: 80%;
  left: -30px;
  background: white;
  z-index: 10;
  border-radius: 5px;
  box-shadow: 0 0 15px 2px rgba(125, 125, 125, 0.3);
`;

export const SubNavItem = styled(Link)`
  display: list-item;
  color: black;
  text-decoration: none;
  list-style-type: none;
  padding: 1rem 2rem;
  &:hover {
    background-color: rgba(125, 125, 125, 0.3);
  }
  &:hover:first-child {
    border-radius: 5px 5px 0 0;
  }
`;

export const NavLink = styled(Link)`
  color: white;
  position: relative;
  display: flex;
  font-size: 20px;
  height: 100%;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  ${(props) =>
    props.mode === 'light' &&
    css`
      color: black;
    `}
`;

export const NavMenu = styled.div`
  /* display: flex;
     align-items: center;*/
  /* margin: 0 -25px;*/
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
`;

export const NavBtn = styled.nav`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 4px;
  background: var(--Main-Colors-Purple-5, #925FF0);
  ${(props) =>
    props.mode === 'light' &&
    css`
      background-color: black;
      color: white;
    `}
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

