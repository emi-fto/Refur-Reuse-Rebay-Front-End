import { Button, ThemeIcon } from "@mantine/core";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { IconShoppingCart } from "@tabler/icons-react";
import rEbay from "../assets/images/Rebay Logo.png";
import { SimpleGrid } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

function Navbar() {
  const { width } = useViewportSize();

  return (
    <>
      <SimpleGrid
        className="NavbarGrid"
        cols={width > 1200 ? 5 : width > 800 ? 2 : 1}
      >
        <Link to="/">
          <img className="logo" src={rEbay} alt="ReBay" />
        </Link>

        <Link to="/About">
          <Button color="blue" mt="md" radius="md">
            About US
          </Button>
        </Link>

        <Link to="/AddItem">
          <Button color="blue" mt="md" radius="md">
            Add Item
          </Button>
        </Link>

        <Link to="/Quote">
          <Button color="blue" mt="md" radius="md">
            Ask for quote
          </Button>
        </Link>

        <Link to="/Cart">
          <ThemeIcon className="themeIcon" radius="md" size="lg" color="orange">
            <IconShoppingCart size="2rem" stroke={1.5} />
          </ThemeIcon>
        </Link>
      </SimpleGrid>
    </>
  );
}
export default Navbar;
