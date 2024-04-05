import { Menu, Text, ThemeIcon, Burger } from "@mantine/core";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { IconShoppingCart } from "@tabler/icons-react";
import rEbay from "../assets/images/Rebay Logo.png";
import { SimpleGrid } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en/translation.json";
import translationDE from "../locales/de/translation.json";
import LanguageSwitcher from "./LanguageSwitcher";

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function Navbar() {
  const { t } = useTranslation();
  const { width } = useViewportSize();
  const [opened, setOpened] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpened(false);
        setMenuOpened(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setOpened(false);
      setMenuOpened(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  const handleBurgerClick = () => {
    setOpened(!opened);
    setMenuOpened(!menuOpened);
  };

  return width > 1200 ? (
    <>
      <SimpleGrid ml="5vw" cols={5}>
        <Link to="/">
          <img className="logo" src={rEbay} alt="ReBay" />
        </Link>

        <Link to="/About">
          <Text mt="2.2rem" fw={500} ta="center">
            {t("About Us")}
          </Text>
        </Link>

        <Link to="/AddItem">
          <Text mt="2.2rem" fw={500} ta="center">
            {t("Add Item")}
          </Text>
        </Link>

        <Link to="/Quote">
          <Text mt="2.2rem" fw={500} ta="center">
            {t("Ask Quote")}
          </Text>
        </Link>

        <Link to="/Cart">
          <ThemeIcon radius="md" size="lg" color="orange" mt="2.1rem" ml="7rem">
            <IconShoppingCart size="2rem" stroke={1.5} />
          </ThemeIcon>
        </Link>
        <LanguageSwitcher />
      </SimpleGrid>
    </>
  ) : (
    <>
      <SimpleGrid ml="5vw" cols={2}>
        <div className="logoBurger" ref={menuRef}>
          <Menu shadow="md" width={150} opened={menuOpened}>
            <Menu.Target>
              <Burger
                opened={opened}
                onClick={handleBurgerClick}
                aria-label="Toggle navigation"
              />
            </Menu.Target>
            <Menu.Dropdown>
              <Link to="/About">
                <Text mt="1rem" fw={500} ta="center">
                  {t("About Us")}
                </Text>
              </Link>
              <Menu.Divider />
              <Link to="/AddItem">
                <Text mt="1rem" fw={500} ta="center">
                  {t("Add Item")}
                </Text>
              </Link>
              <Menu.Divider />
              <Link to="/Quote">
                <Text my="1rem" fw={500} ta="center">
                  {t("Ask Quote")}
                </Text>
              </Link>
              <Menu.Divider />
              <LanguageSwitcher />
            </Menu.Dropdown>
          </Menu>
          <Link to="/">
            <img className="logoSm" src={rEbay} alt="ReBay" />
          </Link>
        </div>
        <Link to="/Cart">
          <ThemeIcon radius="md" size="lg" color="orange" ml="30vw" mt="1.3rem">
            <IconShoppingCart size="2rem" stroke={1.5} />
          </ThemeIcon>
        </Link>
      </SimpleGrid>
    </>
  );
}
export default Navbar;
