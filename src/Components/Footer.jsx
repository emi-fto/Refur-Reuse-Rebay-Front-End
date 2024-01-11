import { NavLink, SimpleGrid, Center } from "@mantine/core";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import { useViewportSize } from "@mantine/hooks";

function Footer() {
  const { width } = useViewportSize();
  return (
    <>
      <Center>
        <SimpleGrid cols={width > 1200 ? 2 : 1}>
          <NavLink
            className="navLink"
            href="https://github.com/sitkujanos86/json-server-backend.git"
            label="GitHub Back End Repository"
            leftSection={<IconBrandGithubFilled size="1rem" stroke={1.5} />}
            target="_blank"
          />
          <NavLink
            className="navLink"
            href="https://github.com/emi-fto/E-commerce-Web-App-React.git"
            label="GitHub Front End Repository"
            leftSection={<IconBrandGithubFilled size="1rem" stroke={1.5} />}
            target="_blank"
          />
        </SimpleGrid>
      </Center>
    </>
  );
}

export default Footer;
