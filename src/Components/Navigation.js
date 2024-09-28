// app/Components/Navigation.js
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { useTheme } from "next-themes"; 

import logo from '../Images/logo.png'



const Navigation = () => {
    
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme } = useTheme(); 
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (

      <Navbar className={theme === "dark" ? "dark amoled" : ""} onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
        <NavbarContent>
          
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden" 
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">WEBDEVCC</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
            <button onClick={() => handleScrollTo("intro")} className="text-foreground">
              Home
            </button>
          </NavbarItem>
          <NavbarItem>
            <button onClick={() => handleScrollTo("about-us")} className="text-foreground">
              About Us
            </button>
          </NavbarItem>
          <NavbarItem>
            <button onClick={() => handleScrollTo("reasons")} className="text-foreground">
              Presence
            </button>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">

          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

  );
};

export default Navigation;
