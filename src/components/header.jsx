import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

const Nav = styled.nav`
  ${tw`flex items-center justify-between flex-wrap p-6`}
`;

const LogoWrapper = styled.nav`
  ${tw`flex items-center flex-shrink-0 mr-6`}
`;

const Logo = styled.svg`
  ${tw`h-8 w-8 mr-2`}
`;

const LogoText = styled.span`
  ${tw`font-semibold text-xl tracking-tight`}
`;

const MenuButtonWrapper = styled.div`
  ${tw`block lg:hidden`}
`;

const MenuButton = styled.button`
  ${tw`flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white`}
`;

const MenuButtonIcon = styled.svg`
  ${tw`fill-current h-3 w-3`}
`;

const MenuItemsWrapper = styled.div`
  ${tw`w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
`;

const MenuItemsLeft = styled.div`
  ${tw`text-sm lg:flex-grow`}
`;

const MenuItem = styled.a`
  ${tw`block mt-4 lg:inline-block lg:mt-0 mr-4`}
`;

const MenuItemButton = styled.a`
  ${tw`inline-block text-sm px-4 py-2 leading-none border rounded border-black hover:bg-white mt-4 lg:mt-0`}
`;

const Header = () => {
  return (
    <header>
      <Nav>
        <LogoWrapper>
          <Logo
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </Logo>
          <LogoText>Tailwind CSS</LogoText>
        </LogoWrapper>
        <MenuButtonWrapper>
          <MenuButton>
            <MenuButtonIcon
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </MenuButtonIcon>
          </MenuButton>
        </MenuButtonWrapper>
        <MenuItemsWrapper>
          <MenuItemsLeft>
            <MenuItem href="#responsive-header">Docs</MenuItem>
            <MenuItem href="#responsive-header">Examples</MenuItem>
            <MenuItem href="#responsive-header">Blog</MenuItem>
          </MenuItemsLeft>
          <div>
            <MenuItemButton href="#">Download</MenuItemButton>
          </div>
        </MenuItemsWrapper>
      </Nav>
    </header>
  );
};

export default Header;
